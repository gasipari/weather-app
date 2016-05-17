var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Brussels'>Brussels, Belgium</Link>
        </li>
        <li>
          <Link to='/?location=Kigali'>Kigali, Rwanda</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
