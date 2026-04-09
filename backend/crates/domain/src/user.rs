use serde::{Serialize, Deserialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub email: String,
    pub password_hash: String,
    pub upvotes: i32,
    pub downvotes: i32,
}

pub enum DomainError {
    InvalidEmail,
    WeakPassword,
    UserAlreadyExists,
    Internal(String),
}
