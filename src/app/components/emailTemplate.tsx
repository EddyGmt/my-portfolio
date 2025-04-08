export function EmailTemplate({ name, email, message }: { name: string; email: string; message: string }) {
    return (
      <div style={{ fontFamily: "Arial", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2 style={{ color: "#333" }}>📩 Nouveau message de {name}</h2>
        <p><strong>Email :</strong> {email}</p>
        <p><strong>Message :</strong></p>
        <blockquote style={{ borderLeft: "4px solid #007bff", paddingLeft: "10px", color: "#555" }}>{message}</blockquote>
        <p>📌 Envoyé depuis ton portfolio.</p>
      </div>
    );
  }
  