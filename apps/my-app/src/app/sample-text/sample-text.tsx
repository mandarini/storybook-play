export interface SampleTextProps {
  content: string;
}

export function SampleText(props: SampleTextProps) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
}

export default SampleText;
