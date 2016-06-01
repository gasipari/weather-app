var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Kigali'>Kigali, Rwanda</Link>
        </li>
        <li>
          <Link to='/?location=Brussels'>Brussels, Belgium</Link>
        </li>
        <li>
          <Link to='/?location=Bonn'>Bonn, Germany</Link>
        </li>
        <li>
          <Link to='/?location=Koblenz'>Koblenz, Germany</Link>
        </li>
        <li>
          <Link to='/?location=Duisburg'>Duisburg, Germany</Link>
        </li>
        <li>
          <Link to='/?location=Lille'>Lille, France</Link>
        </li>
        <li>
          <Link to='/?location=Valenciennes'>Valenciennes, France</Link>
        </li>
        <li>
          <Link to='/?location=Metz'>Metz, France</Link>
        </li>
        <li>
          <Link to='/?location=Arlon'>Arlon, Belgium</Link>
        </li>
        <li>
          <Link to='/?location=San Francisco'>San Francisco, CA, USA</Link>
        </li>
        <li>
          <Link to='/?location=Pleasanton,CA'>Pleasanton, CA, USA</Link>
        </li>
        <li>
          <Link to='/?location=Fremont,CA'>Fremont, CA, USA</Link>
        </li>
        <li>
          <Link to='/?location=Alpharetta,GA'>Alpharetta, GA, USA</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
