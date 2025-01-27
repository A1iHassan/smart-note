export interface SingleTaskProps {
  title: string;
  snippet: string;
}

const SingleTask = ({
  title = "ali",
  snippet = "this is the default snippet you will be seeing",
}: SingleTaskProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{snippet}</p>
    </div>
  );
};

export default SingleTask;
