import React from 'react';
import "./Maincontent.css";

const Maincontent = ({ pageName }) => {
  return (
    <div>
        <main>
            {pageName}
        </main>
    </div>
  )
}



export default Maincontent;