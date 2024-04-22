export default function Html({ data }: { data: string }) {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
