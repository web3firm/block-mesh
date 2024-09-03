use flume::Receiver;
use tokio::task::JoinHandle;

#[tracing::instrument(name = "joiner", skip(rx), level = "trace")]
pub async fn joiner_loop(rx: Receiver<JoinHandle<()>>) -> Result<(), anyhow::Error> {
    while let Ok(handle) = rx.recv_async().await {
        let _ = handle.await;
    }
    Ok(())
}
