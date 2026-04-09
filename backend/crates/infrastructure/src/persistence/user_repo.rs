use application::ports::user_repository::UserRepository;
use domain::user::User as DomainUser;
use crate::entities::{user as UserEntity};
use async_trait::async_trait;
use sea_orm::*;

pub struct SeaOrmUserRepository {
    pub db: DatabaseConnection,
}

impl SeaOrmUserRepository {
    pub fn new(db: DatabaseConnection) -> Self {
        Self { db }
    }
}

#[async_trait]
impl UserRepository for SeaOrmUserRepository {
    // Поиск пользователя
    async fn find_by_email(&self, email: &str) -> Result<Option<DomainUser>, String> {
        let model = UserEntity::Entity::find()
            .filter(UserEntity::Column::Email.eq(email))
            .one(&self.db)
            .await
            .map_err(|e| e.to_string())?;

        // Маппинг: превращаем Модель БД в Модель Домена
        Ok(model.map(|m| DomainUser {
            id: m.id,
            username: m.username,
            email: m.email,
            password_hash: m.password_hash,
            upvotes: m.upvotes,
            downvotes: m.downvotes,
        }))
    }

    // Сохранение нового пользователя
    async fn save(&self, user: DomainUser) -> Result<(), String> {
        let active_user = UserEntity::ActiveModel {
            id: Set(user.id),
            username: Set(user.username),
            email: Set(user.email),
            password_hash: Set(user.password_hash),
            upvotes: Set(user.upvotes),
            downvotes: Set(user.downvotes),
            created_at: Set(chrono::Utc::now().into()), // Установка текущего времени
            ..Default::default()
        };

        active_user.insert(&self.db).await.map_err(|e| e.to_string())?;
        Ok(())
    }
}