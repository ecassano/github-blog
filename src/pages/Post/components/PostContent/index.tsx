import { Content } from "./styles"

const formatContent = (content: string) => {
  const lines = content.split('\n');

  return lines.map((line, index) => {
    if (line.startsWith("```")) {
      let codeBlock = "";
      // Percorre as linhas para capturar o conteúdo do código
      while (lines[index + 1] && !lines[index + 1].startsWith("```")) {
        codeBlock += lines[index + 1] + "\n";
        index++;
      }

      return (
        <pre key={index}>
          <code>{codeBlock.trim()}</code>
        </pre>
      );
    }

    // Títulos
    if (line.startsWith('### ')) {
      return <h3 key={index}>{line.replace('### ', '').replace(/\*\*/g, '')}</h3>;
    }

    // Negrito (**) -> <strong>
    if (line.includes('**')) {
      return <p key={index}>{line.split('**').map((chunk, i) => i % 2 === 1 ? <strong>{chunk}</strong> : chunk)}</p>;
    }

    if (line.includes('```')) {
      return <code key={index}>{line}</code>
    }

    if (line.startsWith("![")) {
      console.log(line.slice(line.indexOf("(") + 1, line.lastIndexOf(")")))
      return <img src={line.slice(line.indexOf("(") + 1, line.lastIndexOf(")"))} alt="" />
    }

    return <p key={index}>{line}</p>;
  });
};

const PostContent = ({ content }: { content: string }) => {
  const formattedContent = formatContent(content);

  return (
    <Content>
      {formattedContent}
    </Content>
  )
}

export default PostContent