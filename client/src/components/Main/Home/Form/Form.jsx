import React from "react";
import { useForm } from "react-hook-form";
import family_icon from "../../../../assets/family_restroom.svg";
import logo from "../../../../assets/logo1.svg"
import { Link } from "react-router-dom";
import family from "../../../../assets/family.svg"
import formCompleted from "../../../../assets/formCompleted.svg"

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
    const { register, handleSubmit, watch, formState: { errors, isValid }, onChange } = useForm({ mode: "all" });
    const radioOption = watch()

    const submitForm = (values, e) => {

        window.alert(JSON.stringify(values, null, 2))
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
                    <div className="form__beginningpage">
                        <img src={family} alt="" />
                        <h1 style={{ color: "#596B61" }}>Solicitud de inscripción</h1>
                        <p className="subtitle_1">Programa Un Curso en Familia</p>
                        <p className="subtitle_2">CURSO 2022/2023</p>
                        <button className="form-button-orange" onClick={completeFormStep}>Empezar</button>
                        <article>
                            <div className="circle-1"></div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="circle-4"></div>


                        </article>
                    </div>
                )}

                {formStep === 1 && (
                    <div className="form-general">

                        <div className="form_progress_bar">
                            <img src={progreso1} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="forminputs">
                            <div className="forminputs-left">
                                <div id="form_name_and_surname" className="forminputs-div">
                                    <label className="form_labels">Nombre y apellidos*</label>
                                    <input
                                        type="text"
                                        name="namesur"
                                        {...register("namesur", {
                                            required: {
                                                value: true,
                                                message: "Por favor, introduce un nombre y apellido"
                                            },
                                            pattern: {
                                                value: /[A-Za-z]{3}/,
                                                message: "Por favor, introduce nombre y apellido válidos",

                                            }
                                        })}
                                        placeholder="Nombre y apellidos"
                                        className={errors.namesur ? "input-invalid" : ""} />
                                    {errors.namesur && <p className="error-msg">{errors.namesur.message}</p>}
                                </div>
                                <div id="form_email" className="forminputs-div">
                                    <label className="form_labels">E-mail*</label>
                                    <input
                                        type="text"
                                        name="email"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Por favor, introduce un e-mail"
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Por favor, introduce un e-mail válido"
                                            }
                                        })}
                                        placeholder="correo@email.com"
                                    />
                                    {errors.email && <p className="error-msg">{errors.email.message}</p>}
                                </div>
                                <div id="form_phone_number" className="forminputs-div">
                                    <label className="form_labels">Teléfono de contacto*</label>
                                    <input
                                        type="number"
                                        {...register("telephone", {

                                            maxLength: {
                                                value: 12,
                                                message: 'Por favor, introduce un número válido'
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Por favor, introduce un número válido'
                                            },

                                            required: {
                                                value: true,
                                                message: "Por favor, introduce un teléfono de contacto",
                                            }
                                        })}
                                        placeholder="600 000 000" />
                                    {errors.telephone && <p className="error-msg">{errors.telephone.message}</p>}
                                </div>
                                <div id="form_address" className="forminputs-div">
                                    <label className="form_labels">Dirección*</label>
                                    <input
                                        type="text"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Por favor, introduce una dirección"
                                            },
                                            pattern: {
                                                value: /[A-Za-z0-9'\.\-\s\,]{6,}$/,
                                                message: "Por favor, introduce una dirección válida"
                                            }
                                        })}
                                        placeholder="Dirección"
                                        className="input-form" />
                                    {errors.address && <p className="error-msg">{errors.address.message}</p>}
                                </div>
                                <div id="form_postalcode" className="forminputs-div">
                                    <label className="form_labels">Código Postal*</label>

                                    <input
                                        type="number"
                                        {...register("postalcode", {
                                            onChange,
                                            maxLength: {
                                                value: 5,
                                                message: 'Por favor, introduce un número válido'
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Por favor, introduce un número válido'
                                            },
                                            required: {
                                                value: true,
                                                message: "Por favor, introduce un código postal"
                                            }
                                        })}
                                        placeholder="Código postal" />

                                    {errors.postalcode && <p className="error-msg">{errors.postalcode.message}</p>}
                                </div>

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
                    <div className="form-general">

                        <div className="form_progress_bar">
                            <img src={progreso2} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="forminputs">
                            <div className="forminputs-left">

                                <label className="form_labels">¿Has tenido contacto previo con niños, niñas o adolescentes bajo medidas de protección?*</label>

                                <div className="forminputsradio-div">

                                    <label htmlFor="radio1">Soy una familia acogedora con idoneidad</label>
                                    <input
                                        {...register("previouscontact", {
                                            required:
                                            {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="previouscontact"
                                        type="radio"
                                        value="Famila de acogida idónea"
                                       
                                        id="radio1" />

                                </div>
                                <div className="forminputsradio-div">
                                    <label>He sido familia acogedora con idoneidad hace tiempo</label>
                                    <input
                                        {...register("previouscontact", { required: { value: true, message: "Por favor, marca una opción" } })}
                                        name="previouscontact"
                                        type="radio"
                                        value="He sido familia acogedora con idoneidad hace tiempo"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">He participado en programas de acogimiento vacacional</label>
                                    <input
                                        {...register("previouscontact", { required: { value: true, message: "Por favor, marca una opción" } })}
                                        name="previouscontact"
                                        type="radio"
                                        value="He participado en programas de acogimiento vacacional"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label htmlFor="contactbefore" className="formradios">Conozco el acogimiento familiar a
                                        través de personas de mi entorno que han acogido</label>
                                    <input
                                        {...register("previouscontact", { required: { value: true, message: "Por favor, marca una opción" } })}
                                        name="previouscontact"
                                        type="radio"
                                        value="Conozco el acogimiento familiar a través de personas de mi entorno que han acogido"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">Colaboro como voluntario/a en una residencia infantil</label>
                                    <input
                                        {...register("previouscontact", { required: { value: true, message: "Por favor, marca una opción" } })}
                                        name="previouscontact"
                                        type="radio"
                                        value="Colaboro como voluntario/a en una residencia infantil"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">He participado en programas y actividades puntuales con
                                        menores en acogimiento residencial</label>
                                    <input
                                        {...register("previouscontact", { required: { value: true, message: "Por favor, marca una opción" } })}
                                        name="previouscontact"
                                        type="radio"
                                        value="He participado en programas y actividades puntuales con menores en acogimiento residencial"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">No he tenido contacto previo</label>
                                    <input
                                        {...register("previouscontact", { required: { value: true, message: "Por favor, marca una opción" } })}
                                        name="previouscontact"
                                        type="radio"
                                        value="No he tenido contacto previo"
                                        className="input-form" />
                                </div>
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
                    <div className="form-general">

                        <div className="form_progress_bar">
                            <img src={progreso3} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="forminputs">
                            <div id="num-personas-nucleo-fam" className="forminputs">
                                <div className="forminputs-div">
                                    <label className="form_labels">¿Cuantas personas formáis parte del núcleo familiar conviviente?</label>
                                    <label className="form_labels-clarification"> Incluyéndote a ti</label>
                                    <input type="number" {...register("numpeople", {
                                        required:
                                        {
                                            value: true,
                                            message: "Por favor, rellena este campo"
                                        }
                                    })}
                                        name="numpeople"
                                        placeholder="4"
                                    />
                                    {errors.numpeople && <p className="error-msg">{errors.numpeople.message}</p>}
                                </div>

                            </div>

                            <div id="tienes-hijos" className="forminputs-radio" >
                                <label className="form_labels">¿Tienes hijos/as?*</label>
                                <div className="forminputsradio-div">
                                    <label>Sí</label>
                                    <input
                                        {...register("havesons",{
                                            required:
                                            {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="havesons"
                                        type="radio"
                                        value="si"
                                    />
                                </div>
                                <div className="forminputsradio-div">
                                    <label>No</label>
                                    <input
                                        {...register("havesons",{
                                            required:
                                            {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="havesons"
                                        type="radio"
                                        value="no"
                                    />
                                </div>
                                {errors.havesons && <p className="error-msg">{errors.havesons.message}</p>}
                            </div>

                            <div id="edad-sexo" className="forminputs">
                                <div className="forminputs-div">
                                    <label className="form_labels">Si procede, edad y sexo/género de los niños/as o adolescentes que forman parte de tu núcleo de convivencia</label>
                                    <input
                                        type="text"
                                        {...register("agesex",{
                                            required:
                                            {
                                                value: true,
                                                message: "Por favor, rellena este campo"
                                            }
                                        })}
                                        placeholder="10 años, mujer"
                                    />
                                    {errors.agesex && <p className="error-msg">{errors.agesex.message}</p>}
                                </div>
                            </div>

                        </div>


                        <div className="form-buttons-div">
                            <button
                                className="form-button-back"
                                onClick={backFormStep}>Atrás
                            </button>

                            <button disabled={!isValid} className="form-button-orange" onClick={completeFormStep}>Siguiente</button>
                        </div>
                    </div>
                )}

                {formStep === 4 && (
                    <div className="form-general">

                        <div className="form_progress_bar">
                            <img src={progreso4} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="forminputs">

                            <div className="forminputs-div">
                                <label className="form_labels">¿A menores de qué rango de edad estarías dispuesto a acoger?*</label>
                                <label className="form_labels-clarification">Los y las menores bajo medidas de protección a los que se dirige el programa se
                                    encuentran
                                    en el
                                    rango de edad entre 6 y 17 años</label>
                                <input 
                                type="number" {...register("age", { 
                                required: {
                                    value: true,
                                    message: "Por favor, rellena este campo"

                                } })} 
                                name="age"
                                placeholder="6-17"
                                 />
                                 {errors.age && <p className="error-msg">{errors.age.message}</p>}
                            </div>
                            <div className="forminputs-div">
                                <label className="form_labels">¿Tienes relación con algún menor en concreto?</label>
                                <label className="form_labels-clarification">Si es así indica nombre, residencia, a qué se debe la relación y el tiempo que hace que os conocéis</label>
                                <input 
                                type="text" 
                                {...register("relationship", { 
                                    required: {
                                        value: true,
                                        message: "Por favor, rellena este campo"
    
                                    }
                                    
                                })} 
                                placeholder="Sí/No" 
                                />
                                {errors.relationship && <p className="error-msg">{errors.relationship.message}</p>}
                            </div>


                        </div>

                        <div className="form-buttons-div">
                            <button className="form-button-back" onClick={backFormStep}>Atrás</button>
                            <button disabled={!isValid} className="form-button-orange" onClick={completeFormStep}>Siguiente</button>
                        </div>
                    </div>
                )}

                {formStep === 5 && (
                    <div className="form-general">
                        <div className="form_progress_bar">
                            <img src={progreso5} alt="barra de progreso" style={{ width: "220px" }} />
                        </div>

                        <div className="forminputs">

                            <div className="forminputs-radio">
                                <label className="form_labels">¿Cómo has conocido el proyecto?*</label>
                                <div className="forminputsradio-div">
                                    <label className="formradios">Dirección General de Infancia, Familias y Fomento de la
                                        Natalidad</label>
                                    <input
                                        {...register("proyectknowledge", { 
                                            required: {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                            
                                        })}
                                        name="proyectknowledge"
                                        type="radio"
                                        value="Dirección General de Infancia, Familias y Fomento de la Natalidad"
                                    />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">ASEAF</label>
                                    <input
                                        {...register("proyectknowledge", { 
                                            required: {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="proyectknowledge"
                                        type="radio"
                                        value="ASEAF"
                                        className="input-form" />

                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">Familias Para la Acogida</label>
                                    <input
                                        {...register("proyectknowledge", { 
                                            required: {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="proyectknowledge"
                                        type="radio"
                                        value="Familias Para la Acogida"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">ADAMCAM</label>
                                    <input
                                        {...register("proyectknowledge", { 
                                            required: {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="proyectknowledge"
                                        type="radio"
                                        value="ADAMCAM"
                                        className="input-form" />
                                </div>
                                <div className="forminputsradio-div">
                                    <label className="formradios">Fundación Soñar Despierto</label>
                                    <input
                                        {...register("proyectknowledge", { 
                                            required: {
                                                value: true,
                                                message: "Por favor, marca una opción"
                                            }
                                        })}
                                        name="proyectknowledge"
                                        type="radio"
                                        value="Fundación Soñar Despierto"
                                        className="input-form" />
                                </div>
                                {errors.proyectknowledge && <p className="error-msg">{errors.proyectknowledge.message}</p>}
                            </div>
                            <div className="forminputs">
                                <div className="forminputs-div">
                                    <label className="form_labels">¿Tienes alguna duda concreta sobre el proyecto?</label>

                                    <textarea
                                        className="doubt"
                                        type="text"
                                        {...register("doubt")}
                                        placeholder="Escribe aquí..."
                                        name="doubt" rows="4" cols="40" />
                                </div>


                            </div>
                        </div>

                        <div className="form-buttons-div">
                            <button className="form-button-back" onClick={backFormStep}>Atrás</button>
                            <input disabled={!isValid} type="submit" id="send-button" className="form-button-orange" value="Finalizar" />
                        </div>

                    </div>



                )}
                {formStep === 6 && (
                    <div className="form__beginningpage">
                        <img src={formCompleted} alt="" />
                        <h1 style={{ color: "#596B61" }}>¡Solicitud completada con éxito!</h1>
                        <p className="subtitle_1">Nos pondremos en contacto contigo cuando revisemos la solicitud</p>
                        <p className="subtitle_3">¡Gracias por implicarte!</p>
                        <Link to='/' id="end-form-button" style={{textDecoration:"none"}}>
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