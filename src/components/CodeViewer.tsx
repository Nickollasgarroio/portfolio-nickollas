import { useEffect, useState } from "react";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeViewer = ({
  repo,
  filePath,
}: {
  repo: string;
  filePath: string;
}) => {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/${repo}/main/${filePath}`
        );
        setCode(response.data);
      } catch (err) {
        // Verificar se err é uma instância de Error e extrair a mensagem
        const errorMessage =
          err instanceof Error ? err.message : "Erro desconhecido";
        setError(errorMessage);
      }
    };

    fetchCode();
  }, [repo, filePath]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <SyntaxHighlighter language="javascript" style={darcula}>
      {code || "Carregando..."}
    </SyntaxHighlighter>
  );
};
