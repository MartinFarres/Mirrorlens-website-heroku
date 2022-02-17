import React from "react";

function Table() {
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Billy y Elliot</td>
            <td>123</td>
            <td>5</td>
            <td>
              <ul>
                <li>Drama</li>
                <li>Comedia</li>
              </ul>
            </td>
            <td>2</td>
          </tr>
          <tr>
            <td>Alicia en el pais de las maravillas</td>
            <td>142</td>
            <td>4.8</td>
            <td>
              <ul>
                <li>Drama</li>
                <li>Accion</li>
                <li>Comedia</li>
              </ul>
            </td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
