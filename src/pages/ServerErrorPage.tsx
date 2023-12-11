import { Link } from "react-router-dom";

function ServerErrorPage() {
  return (
    <div>
      ServerErrorPage 500
      <br />
      <Link to="/" replace={true}>
        back to Home later
      </Link>
    </div>
  );
}

export default ServerErrorPage;
