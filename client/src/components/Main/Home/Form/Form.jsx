import React from "react";
import { useForm } from "react-hook-form";
import family_icon from "../../../../assets/family_restroom.svg";
import logo from "../../../../assets/logo1.svg"
import { Link } from "react-router-dom";

import progreso1 from "../../../../assets/1.png"
import progreso2 from "../../../../assets/2.png"
import progreso3 from "../../../../assets/3.png"
import progreso4 from "../../../../assets/4.png"
import progreso5 from "../../../../assets/5.png"

const Form = () => {

    //====================
    //** Estados y Funciones: **
    //====================

    //STEP FORM:
    const [formStep, setFormStep] = React.useState(0)


    const completeFormStep = () => {
        setFormStep(current => current + 1)
    }
    const backFormStep = () => {
        setFormStep(current => current - 1)
    }



    //SUBMIT:
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: "all" });
   const radioOption = watch()
    console.log(radioOption)

    const submitForm = (values, e) => {

        window.alert(JSON.stringify(values,null,2))

        e.preventDefault();

        fetch('http://localhost:5000/create', {
            method: 'POST',

            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        completeFormStep()

    }



    return (

        <form onSubmit={handleSubmit(submitForm)}>
            <div>

                {formStep === 0 && (
                    <div className="beginningpage">
                        <img src={logo} alt="" />
                        <h1 className="h1-b" style={{ color: "#596B61" }}>Solicitud de inscripción</h1>
                        <p>Programa Un Curso en Familia</p>
                        <p className="caption">CURSO 2022/2023</p>
                        <button className="form-button-orange" onClick={completeFormStep}>Empezar</button>
                    </div>
                )}

                {formStep === 1 && (
                    <div className="firstform">

                        <div>
                            <img src={progreso1} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="firstforminputs">
                            <div>
                                <label className="forminputs">Nombre y apellidos*</label>
                                <input
                                    type="text"
                                    name="namesur"
                                    {...register("namesur", { required: { value: true, message: "Por favor, introduce un nombre y apellido" } })}
                                    placeholder="Nombre y apellidos"
                                    className="input-form" />
                                {errors.namesur && <p className="error-msg">{errors.namesur.message}</p>}

                            </div>
                            <div>
                                <label className="forminputs">E-mail*</label>
                                <input
                                    type="text"
                                    name="email"
                                    {...register("email", { required: { value: true, message: "Por favor, introduce un e-mail" }, pattern: /[A-Za-z]{3}/ })}
                                    placeholder="correo@email.com"
                                    className="input-form" />
                                {errors.email && <p className="error-msg">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className="forminputs">Teléfono de contacto*</label>
                                <input
                                    type="number"
                                    {...register("telephone", { valueAsNumber: true, minLength: 9, maxLength: 11, required: { value: true, message: "Por favor, introduce un teléfono de contacto" } })}
                                    placeholder="600 000 000" className="input-form" />
                                {errors.telephone && <p className="error-msg">{errors.telephone.message}</p>}
                            </div>
                            <div>
                                <label className="forminputs">Dirección*</label>
                                <input
                                    type="text"
                                    {...register("address", { required: { value: true, message: "Por favor, introduce una dirección" } })}
                                    placeholder="Dirección"
                                    className="input-form" />
                                {errors.address && <p className="error-msg">{errors.address.message}</p>}
                            </div>
                            <div>
                                <label className="forminputs">Código Postal*</label>

                                <input
                                    type="number"
                                    {...register("postalcode", { valueAsNumber: true, minLength: 5, required: { value: true, message: "Por favor, introduce un código postal" } })}
                                    placeholder="Código postal" className="input-form" />

                                {errors.postalcode && <p className="error-msg">{errors.postalcode.message}</p>}
                            </div>
                        </div>
                        <div className="form-buttons-div">
                            <button
                                className="form-button-back"
                                onClick={backFormStep}>Atrás</button>

                            <button
                                disabled={!isValid}
                                className="form-button-orange"
                                onClick={completeFormStep}>Siguiente</button>
                        </div>


                    </div>
                )}

                {formStep === 2 && (
                    <div className="secondform">

                        <div>
                            <img src={progreso2} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="secondforminputs">
                            <h3>¿Has tenido contacto previo con niños o adolescentes bajo medidas de protección?</h3>
                            <div>
                                <label className="formradios" htmlFor="radio1">Soy una familia acogedora con idoneidad</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="Famila de acogida idónea"
                                    className="input-form"
                                    id="radio1"/>
                                

                            </div>
                            <div>
                                <label className="formradios">He sido familia acogedora con idoneidad hace tiempo</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="He sido familia acogedora con idoneidad hace tiempo"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">He participado en programas de acogimiento vacacional</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="He participado en programas de acogimiento vacacional"
                                    className="input-form" />
                            </div>
                            <div>
                                <label htmlFor="contactbefore" className="formradios">Conozco el acogimiento familiar a
                                    través de personas de mi entorno que han acogido</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="Conozco el acogimiento familiar a través de personas de mi entorno que han acogido"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">Colaboro como voluntario/a en una residencia infantil</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="Colaboro como voluntario/a en una residencia infantil"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">He participado en programas y actividades puntuales con
                                    menores en acogimiento residencial</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="He participado en programas y actividades puntuales con menores en acogimiento residencial"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">No he tenido contacto previo</label>
                                <input
                                    {...register("previouscontact", {required: {value: true, message:"Por favor, marca una opción"}})}
                                    name="previouscontact"
                                    type="radio"
                                    value="No he tenido contacto previo"
                                    className="input-form" />
                            </div>
                        </div>
                        {errors.contactbefore && <p className="error-msg">{errors.contactbefore.message}</p>}
                        <div className="form-buttons-div">
                            <button className="form-button-back" onClick={backFormStep}>Atrás</button>
                            <button disabled={!isValid} className="form-button-orange" onClick={completeFormStep}>Siguiente</button>
                        </div>
                    </div>
                )}
                {formStep === 3 && (
                    <div className="thirdform">

                        <div>
                            <img src={progreso3} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        {/*============================================*/}
                        <div className="thirdforminputs">
                            <div>
                                <h3>¿Cuantas personas formáis parte del núcleo familiar conviviente?</h3>
                                <h5>Incluyendote a ti</h5>
                                <input type="number" {...register("numpeople")} name="numpeople" placeholder="4" required className="input-form" />
                            </div>
                        </div>
                        {/*============================================*/}
                        <div className="thirdformradioinputs">
                            <label>¿Tienes hijos?</label>
                            <div>
                                <label>Si</label>
                                <input
                                    {...register("havesons")}
                                    name="havesons"
                                    type="radio"
                                    value="si"
                                    className="input-form" />
                            </div>
                            <div>
                                <label>No</label>
                                <input
                                    {...register("havesons")}
                                    name="havesons"
                                    type="radio"
                                    value="no"
                                    className="input-form" />
                            </div>
                        </div>
                        {/*============================================*/}
                        <div className="thirdforminputs">
                            <div>
                                <label>Si procede, edad y sexo/género de los niños/as o adolescentes que forman parte de tu núcleo de convivencia</label>
                                <input 
                                type="number" 
                                {...register("agesex")} 
                                placeholder="10 años, mujer"
                                className="input-form" />
                            </div>
                        </div>
                        <div className="form-buttons-div">
                            <button className="form-button-back" onClick={backFormStep}>Atrás</button>
                            <button disabled={!isValid} className="form-button-orange" onClick={completeFormStep}>Siguiente</button>
                        </div>
                    </div>
                )}

                {formStep === 4 && (
                    <div className="fourthform">

                        <div>
                            <img src={progreso4} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="fourthforminputs">
                            <div>
                                <label>¿A menores de qué rango de edad estarías dispuesto a acoger?*</label>
                                <h5>Los y las menores bajo medidas de protección a los que se dirige el programa se
                                    encuentran
                                    en el
                                    rango de edad entre 6 y 17 años</h5>
                                <input type="number" {...register("age", { valueAsNumber: true })} name="age" placeholder="6-17"
                                    required className="input-form" />
                            </div>
                            <div>
                                <label>¿Tienes relación con algún menor en concreto?</label>
                                <h5>Si es así indica nombre, residencia, a qué se debe la relación y el tiempo que hace que
                                    os
                                    conocéis</h5>
                                <input type="text" {...register("relationship")} placeholder="Si/No" className="input-form" />
                            </div>
                        </div>
                        <div className="form-buttons-div">
                            <button className="form-button-back" onClick={backFormStep}>Atrás</button>
                            <button disabled={!isValid} className="form-button-orange" onClick={completeFormStep}>Siguiente</button>
                        </div>
                    </div>
                )}

                {formStep === 5 && (
                    <div className="fifthform">
                        <div>
                            <img src={progreso5} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="fifthforminputs">
                            <h3>¿Cómo has conocido el proyecto?*</h3>
                            <div>
                                <label className="formradios">Dirección General de Infancia, Familias y fomento de la
                                    Natalidad</label>
                                <input
                                    {...register("proyectknowledge")}
                                    name="proyectknowledge"
                                    type="radio"
                                    value="Dirección General de Infancia, Familias y fomento de la Natalidad"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">ASEAF</label>
                                <input
                                    {...register("proyectknowledge")}
                                    name="proyectknowledge"
                                    type="radio"
                                    value="ASEAF"
                                    className="input-form" />

                            </div>
                            <div>
                                <label className="formradios">Familias Para la Acogida</label>
                                <input
                                    {...register("proyectknowledge")}
                                    name="proyectknowledge"
                                    type="radio"
                                    value="Familias Para la Acogida"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">ADAMCAM</label>
                                <input
                                    {...register("proyectknowledge")}
                                    name="proyectknowledge"
                                    type="radio"
                                    value="ADAMCAM"
                                    className="input-form" />
                            </div>
                            <div>
                                <label className="formradios">Fundación Soñar Despierto</label>
                                <input
                                    {...register("proyectknowledge")}
                                    name="proyectknowledge"
                                    type="radio"
                                    value="Fundación Soñar Despierto"
                                    className="input-form" />
                            </div>

                            <h3>¿Tienes alguna duda concreta sobre el proyecto?</h3>
                            <div>
                                <input
                                className="doubt"
                                type="text"
                                {...register("doubt")}
                                placeholder="Escribe aquí..."
                                name="doubt" />
                            </div>
                        </div>
                        <input disabled={!isValid} type="submit" id="send-button" className="form-button-orange" value="Finalizar" />
                    </div>

                )}
                {formStep === 6 && (
                    <div className="endingpage">
                        <img src={logo} alt="logo Un curso en familia" />
                        <h1 className="h1-a">¡Solicitud completada con éxito!</h1>
                        <p>Nos pondremos en contacto contigo cuando revisemos la solicitud</p>
                        <h3>¡Gracias por implicarte!</h3>
                        <Link to='/' id="end-form-button">
                            <button id="begin-button" className="form-button-orange">Salir</button>

                        </Link>
                    </div>
                )}
            </div>
            
        </form>
    )
        ;
};


export default Form;
