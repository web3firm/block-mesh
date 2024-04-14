use anyhow::Error as AnyhowError;
use axum::http::StatusCode;
use axum::response::IntoResponse;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("Internal server error")]
    InternalServer,
    #[error("Authentication error: {0}")]
    Auth(String),
    #[error(transparent)]
    Sql(#[from] sqlx::Error),
    #[error(transparent)]
    Anyhow(#[from] AnyhowError),
    #[error("User already exists")]
    UserAlreadyExists,
    #[error("Password Mimatch")]
    PasswordMismatch,
    #[error("User not found")]
    UserNotFound,
    #[error(transparent)]
    Bcrypt(#[from] bcrypt::BcryptError),
    #[error("Nonce not found")]
    NonceNotFound,
}

impl IntoResponse for Error {
    fn into_response(self) -> axum::response::Response {
        tracing::error!("Error occurred: {}", self);
        match self {
            Error::NonceNotFound => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error.").into_response()
            }
            Error::Bcrypt(_) => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error.").into_response()
            }
            Error::UserNotFound => (StatusCode::BAD_REQUEST, "User not found.").into_response(),
            Error::PasswordMismatch => {
                (StatusCode::BAD_REQUEST, "Password mismatch.").into_response()
            }
            Error::UserAlreadyExists => {
                (StatusCode::BAD_REQUEST, "User already exists.").into_response()
            }
            Error::InternalServer => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error.").into_response()
            }
            Error::Auth(message) => (StatusCode::UNAUTHORIZED, message).into_response(),
            Error::Sql(_) => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error.").into_response()
            }
            Error::Anyhow(_) => {
                (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error.").into_response()
            }
        }
    }
}

impl From<Error> for StatusCode {
    fn from(error: Error) -> Self {
        tracing::error!("Error occurred: {}", error);
        match error {
            Error::NonceNotFound => StatusCode::INTERNAL_SERVER_ERROR,
            Error::Bcrypt(_) => StatusCode::INTERNAL_SERVER_ERROR,
            Error::UserNotFound => StatusCode::BAD_REQUEST,
            Error::PasswordMismatch => StatusCode::BAD_REQUEST,
            Error::UserAlreadyExists => StatusCode::BAD_REQUEST,
            Error::InternalServer => StatusCode::INTERNAL_SERVER_ERROR,
            Error::Auth(_) => StatusCode::UNAUTHORIZED,
            Error::Sql(_) => StatusCode::INTERNAL_SERVER_ERROR,
            Error::Anyhow(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}