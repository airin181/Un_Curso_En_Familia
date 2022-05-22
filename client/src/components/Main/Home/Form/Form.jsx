import React from "react";
import {useForm} from "react-hook-form";

const Form = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (data) => {

    const obj = {
      colegio: data.colegio,
      comaut: data.comaut,
      provincia: data.Provincia,
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      puesto: data.puesto
    };

    console.log(obj, "esto es obj");
  };

  return (

      <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
        <div className="conjunto">
          <div className="beginningpage">
            <h2>Solicitud de</h2>
            <h2> inscripción en</h2>
            <h2>el programa</h2>
            <h2 className="titulo2">“Un Curso en Familia”</h2>
          </div>
          <div className="firstform">
            <label>Nombre y apellidos</label>
            <input type="text" {...register("namesur")} name="namesur" placeholder="Nombre y Apellidos"
                   required/>
            <label>Email</label>
            <input type="text" name="email" {...register("email")} placeholder="correo@email.com" required/>
            <label>Teléfono de contacto</label>
            <input type="number" {...register("telephone")} name="telephone" placeholder="600 000 000" required/>
            <label>Dirección</label>
            <input type="text" {...register("address")} name="address" placeholder="address" required/>
            <label>Código Postal</label>
            <input type="number" {...register("postalcode")} name="postalcode" placeholder="postalcode" required/>
          </div>

          <div className="secondform">
            <h3>¿Has tenido contacto previo con niños o addolescentes bajo medidas de protección?</h3>
            <label>
              <input
                  name="fosterfamily"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Soy una familia acojedora con idoneidad
            </label>
            <label>
              <input
                  name="formerfosterfamily"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              He sido familia acogedora con idoneidad hace tiempo
            </label>
            <label>
              <input
                  name="holidayfostering"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              He participado en programas de acogimiento vacacional
            </label>
            <label>
              <input
                  name="knowfostercare"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Conozco el acogimiento familiar a través de personas de mi entorno que han acogido
            </label>
            <label>
              <input
                  name="volunteer"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Colaboro como voluntario/a en una residencia infantil
            </label>
            <label>
              <input
                  name="program&activities"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              He participado en programas y actividades puntuales con menores en acogimiento residencial
            </label>
            <label>
              <input
                  name="zerocontact"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              No he tenido contacto previo
            </label>
            <label>
              <input
                  name="othersecondform"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Otro:
            </label>
          </div>

          <div className="thirform">
            <label>¿Cuantas personas formáis parte del núcleo familiar conviviente?</label>
            <input type="number" {...register("numpeople")} name="numpeople" placeholder="4" required/>
            <label>¿Tienes hijos?</label>
            <label>
              <input
                  name="yes"
                  type="checkbox"/>
              Si
            </label>
            <label>
              <input
                  name="no"
                  type="checkbox"/>
              No
            </label>
            <label>Si procede, edad y sexo/género de los niños/as o adolescentes que forman parte de tu núcleo
              de convivencia</label>
            <input type="" {...register("agesex")} name="agesex" placeholder="10 años, mujer" required/>
          </div>

          <div className="fourthform">
            <label>¿A menores de qué rango de edad estarías dispuesto a acoger?*</label>
            <h5>Los y las menores bajo medidas de protección a los que se dirige el programa se encuentran en el
              rango de edad entre 6 y 17 años</h5>
            <input type="number" {...register("age")} name="age" placeholder="6-17"
                   required/>
            <label>¿Tienes relación con algún menor en concreto?</label>
            <h5>Si es así indica nombre, residencia, a qué se debe la relación y el tiempo que hace que os
              conocéis</h5>
            <input type="text" name="relationship" {...register("relationship")} placeholder="Si/No" required/>
          </div>

          <div className="fifthform">
            <h3>¿Cómo has conocido el proyecto?*</h3>
            <label>
              <input
                  name="dgi"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Dirección General de Infancia, Familias y fomento de la Natalidad
            </label>
            <label>
              <input
                  name="aseaf"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              ASEAF
            </label>
            <label>
              <input
                  name="fosterfamilies"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Familias Para la Acogida
            </label>
            <label>
              <input
                  name="adamcam"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              ADAMCAM
            </label>
            <label>
              <input
                  name="trust"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Fundación Soñar Despierto
            </label>
            <label>
              <input
                  name="otherfifthform"
                  type="checkbox"
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
              />
              Otro:
            </label>
            <h3>¿Tienes alguna duda concreta sobre el proyecto?</h3>
            <input type="text" {...register("doubt")} name="doubt" placeholder="Escribe aquí..." required/>
          </div>
          <div className="endingpage">
            <h2 className="titulo">¡Solicitud completada</h2>
            <h2>con éxito!</h2>
            <h3 className="titulo2">Nos pondremos en contacto contigo cuando</h3>
            <h3>revisemos la solicitud</h3>
            <h3>¡Gracias por implicarte!</h3>
          </div>
        </div>
      </form>);
};

export default Form;
