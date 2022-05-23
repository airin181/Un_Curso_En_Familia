import React from "react";
import {useForm} from "react-hook-form";

const Form = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
    console.log(data)
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
            <input type="text" {...register("namesur")} placeholder="Nombre y Apellidos"
                   required/>
            <label>Email</label>
            <input type="text" name="email" {...register("email")} placeholder="correo@email.com" required/>
            <label>Teléfono de contacto</label>
            <input type="number" {...register("telephone")}  placeholder="600 000 000" required/>
            <label>Dirección</label>
            <input type="text" {...register("address")} placeholder="address" required/>
            <label>Código Postal</label>
            <input type="number" {...register("postalcode")}  placeholder="postalcode" required/>
          </div>

          <div className="secondform">
            <h3>¿Has tenido contacto previo con niños o addolescentes bajo medidas de protección?</h3>

            <label>
              <input
                  {...register("previouscontact")}
                  name="fosterfamily"
                  type="radio"
                  value="Famila de acogida idónea"
              />
              Soy una familia acojedora con idoneidad
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="He sido familia acogedora con idoneidad hace tiempo"
              />
              He sido familia acogedora con idoneidad hace tiempo
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="He participado en programas de acogimiento vacacional"
              />
              He participado en programas de acogimiento vacacional
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="Conozco el acogimiento familiar a través de personas de mi entorno que han acogido"
              />
              Conozco el acogimiento familiar a través de personas de mi entorno que han acogido
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="Colaboro como voluntario/a en una residencia infantil"
              />
              Colaboro como voluntario/a en una residencia infantil
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="He participado en programas y actividades puntuales con menores en acogimiento residencial"
              />
              He participado en programas y actividades puntuales con menores en acogimiento residencial
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="No he tenido contacto previo"
              />
              No he tenido contacto previo
            </label>
            <label>
              <input
                  {...register("previouscontact")}
                  name="formerfosterfamily"
                  type="radio"
                  value="Otro:"
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
                  {...register("havesons")}
                  name="yes"
                  type="radio"
                  value="si"
              />
              Si
            </label>
            <label>
              <input
                  {...register("havesons")}
                  name="no"
                  type="radio"
                  value="no"
              />
              No
            </label>
            <label>Si procede, edad y sexo/género de los niños/as o adolescentes que forman parte de tu núcleo
              de convivencia</label>
            <input type="" {...register("agesex")} placeholder="10 años, mujer" required/>
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
            <input type="text" {...register("relationship")} placeholder="Si/No" />
          </div>

          <div className="fifthform">
            <h3>¿Cómo has conocido el proyecto?*</h3>
            <label>
              <input
                  {...register("proyectknowledge")}
                  name="dgi"
                  type="radio"
                  value="Dirección General de Infancia, Familias y fomento de la Natalidad"
              />
              Dirección General de Infancia, Familias y fomento de la Natalidad
            </label>
            <label>
              <input
                  {...register("proyectknowledge")}
                  name="aseaf"
                  type="radio"
                  value="ASEAF"
              />
              ASEAF
            </label>
            <label>
              <input
                  {...register("proyectknowledge")}
                  name="fpla"
                  type="radio"
                  value="Familias Para la Acogida"
              />
              Familias Para la Acogida
            </label>
            <label>
              <input
                  {...register("proyectknowledge")}
                  name="adamcam"
                  type="radio"
                  value="ADAMCAM"
              />
              ADAMCAM
            </label>
            <label>
              <input
                  {...register("proyectknowledge")}
                  name="trust"
                  type="radio"
                  value="Fundación Soñar Despierto"
              />
              Fundación Soñar Despierto
            </label>
            <label>
              <input
                  {...register("proyectknowledge")}
                  name="another"
                  type="radio"
                  value="otro"
              />
              Otro:
            </label>
            <h3>¿Tienes alguna duda concreta sobre el proyecto?</h3>
            <input type="text" {...register("doubt")}  placeholder="Escribe aquí..." required/>
          </div>
          <div className="endingpage">
            <h2 className="titulo">¡Solicitud completada</h2>
            <h2>con éxito!</h2>
            <h3 className="titulo2">Nos pondremos en contacto contigo cuando</h3>
            <h3>revisemos la solicitud</h3>
            <h3>¡Gracias por implicarte!</h3>
          </div>
        </div>
        <input type="submit"/>
      </form>);
};

export default Form;
