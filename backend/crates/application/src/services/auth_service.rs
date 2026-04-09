use std::sync::Arc;
use domain::user::User;
use crate::ports::user_repository::UserRepository;
use crate::ports::password_hasher::PasswordHasher;
use crate::ports::token_service::TokenService; // 1. Импортируем новый порт

pub struct AuthService {
    repo: Arc<dyn UserRepository>,
    hasher: Arc<dyn PasswordHasher>,
    token_service: Arc<dyn TokenService>, // 2. Добавляем поле для работы с токенами
}

impl AuthService {
    pub fn new(
        repo: Arc<dyn UserRepository>, 
        hasher: Arc<dyn PasswordHasher>,
        token_service: Arc<dyn TokenService>, // 3. Обновляем конструктор
    ) -> Self {
        Self { repo, hasher, token_service }
    }

    // Сценарий регистрации (остается почти таким же)
    pub async fn register(&self, username: String, email: String, raw_pass: String) -> Result<(), String> {
        if self.repo.find_by_email(&email).await?.is_some() {
            return Err("Пользователь с таким email уже существует".into());
        }

        let hashed_password = self.hasher.hash(&raw_pass);

        let new_user = User {
            id: domain::uuid::Uuid::new_v4(),
            username,
            email,
            password_hash: hashed_password,
            upvotes: 0,
            downvotes: 0,
        };

        self.repo.save(new_user).await
    }

    // Сценарий входа (теперь возвращает ТОКЕН)
    pub async fn login(&self, email: String, raw_pass: String) -> Result<String, String> {
        // 1. Ищем пользователя
        let user = self.repo.find_by_email(&email).await?
            .ok_or("Пользователь не найден")?;

        // 2. Проверяем пароль
        if !self.hasher.verify(&raw_pass, &user.password_hash) {
            return Err("Неверный пароль".into());
        }

        // 3. Генерируем JWT токен через интерфейс
        // Мы передаем ID пользователя, а сервис токенов превращает его в зашифрованную строку
        let token = self.token_service.create_token(user.id)?;

        Ok(token)
    }
}