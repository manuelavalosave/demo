   const expresiones = {
            usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
            name: /^[a-zA-ZÀ-ÿ\s\,]{1,1000}$/, // Letras y espacios, pueden llevar acentos.
            all_input: /^[a-zA-Z0-9-ÿ\s\,]{1,1000}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{4,12}$/, // 4 a 12 digitos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            telefono: /^\d{7,14}$/, // 7 a 14 numeros.
            fecha: /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
            number: /^\d{1,14}$/,
            curp: /^[a-zA-Z]{4}\d{6}[a-zA-Z]{6}\d{2}$/,

            rfc: /^[a-zA-Z]{4}\d{6}[a-zA-Z0-9]{3}$/,
            pesos: /^\$\d{1,3}(,\d{3})*(\.\d+)?$/,
        }
        const validarFormulario = (e) => {

            switch (e.target.name) {
                case "lugar":
                    validarCampo(expresiones.name, e.target, 'lugar');
                    break;
                case "name":
                    validarCampo(expresiones.name, e.target, 'name');
                    break;
                case "last_name":
                    validarCampo(expresiones.name, e.target, 'last_name');
                    break;
                case "Second_surname":
                    validarCampo(expresiones.name, e.target, 'Second_surname');
                    break;
                case "work":
                    validarCampo(expresiones.name, e.target, 'work');
                    break;
                case "born":
                    $fecha = "" + e.target.value + " 00:00:00";

                    var date = new Date($fecha);


                    const formatDate = (date) => {
                        if (date.getDate() < 10) {
                            var day = "0" + date.getDate();
                        } else {
                            var day = date.getDate();
                        }

                        var month = new Array();
                        month[0] = "01";
                        month[1] = "02";
                        month[2] = "03";
                        month[3] = "04";
                        month[4] = "05";
                        month[5] = "06";
                        month[6] = "07";
                        month[7] = "08";
                        month[8] = "09";
                        month[9] = "10";
                        month[10] = "11";
                        month[11] = "12";
                        let formatted_date = day + "/" + month[date.getMonth()] + "/" + date.getFullYear()
                        return formatted_date;
                    }

                    $conv = formatDate(date)

                    validarCampo(expresiones.fecha, $conv, 'born');
                    break;
                case "nacionalidad_general":
                    validarCampo(expresiones.name, e.target, 'nacionalidad_general');

                    break;
                case "nacionalidad_beneficiario1":
                    validarCampo(expresiones.name, e.target, 'nacionalidad_beneficiario1');

                    break;
                case "nacionalidad_beneficiario2":
                    validarCampo(expresiones.name, e.target, 'nacionalidad_beneficiario2');

                    break;
                case "nacionalidad_beneficiario3":
                    validarCampo(expresiones.name, e.target, 'nacionalidad_beneficiario3');

                    break;
                case "estado_nacimiento":
                    validarCampo(expresiones.number, e.target, 'estado_nacimiento_general');

                    break;
                case "estado_beneficiario1":
                    validarCampo(expresiones.number, e.target, 'estado_beneficiario1');

                    break;
                case "estado_beneficiario2":
                    validarCampo(expresiones.number, e.target, 'estado_beneficiario2');

                    break;
                case "estado_beneficiario3":
                    validarCampo(expresiones.number, e.target, 'estado_beneficiario3');

                    break;
                case "regimen_inversion":
                    validarCampo(expresiones.number, e.target, 'regimen_inversion');

                    break;
                case "ciudad":
                    validarCampo(expresiones.number, e.target, 'ciudad_general');

                    break;
                case "municipio_beneficiario1":
                    validarCampo(expresiones.number, e.target, 'municipio_beneficiario1');

                    break;
                case "municipio_beneficiario2":
                    validarCampo(expresiones.number, e.target, 'municipio_beneficiario2');

                    break;
                case "municipio_beneficiario3":
                    validarCampo(expresiones.number, e.target, 'municipio_beneficiario3');

                    break;
                case "curp":

                    validarCampo(expresiones.curp, e.target, 'curp');

                    break;
                case "curp_beneficiario1":

                    validarCampo(expresiones.curp, e.target, 'curp_beneficiario1');

                    break;
                case "curp_beneficiario2":
                    validarCampo(expresiones.curp, e.target, 'curp_beneficiario2');

                    break;
                case "curp_beneficiario3":
                    validarCampo(expresiones.curp, e.target, 'curp_beneficiario3');

                    break;
                case "rfc":
                    validarCampo(expresiones.rfc, e.target, 'rfc');

                    break;
                case "rfc_beneficiario1":
                    validarCampo(expresiones.rfc, e.target, 'rfc_beneficiario1');

                    break;
                case "rfc_beneficiario2":
                    validarCampo(expresiones.rfc, e.target, 'rfc_beneficiario2');

                    break;
                case "rfc_beneficiario3":
                    validarCampo(expresiones.rfc, e.target, 'rfc_beneficiario3');

                    break;

                case "email":
                    validarCampo(expresiones.correo, e.target, 'email');
                    break;
                case "phone":
                    validarCampo(expresiones.telefono, e.target, 'phone');
                    break;
                case "regimen_conyugal":
                    validarCampo(expresiones.name, e.target, 'regimen_conyugal');
                    break;
                case "firmante1":
                    validarCampo(expresiones.name, e.target, 'firmante1');
                    break;
                case "firmante2":
                    validarCampo(expresiones.name, e.target, 'firmante2');
                    break;
                case "firmante3":
                    validarCampo(expresiones.name, e.target, 'firmante3');
                    break;
                case "regimen_conyugal_beneficiario1":
                    validarCampo(expresiones.name, e.target, 'regimen_conyugal_beneficiario1');
                    break;
                case "regimen_conyugal_beneficiario2":
                    validarCampo(expresiones.name, e.target, 'regimen_conyugal_beneficiario2');
                    break;
                case "regimen_conyugal_beneficiario3":
                    validarCampo(expresiones.name, e.target, 'regimen_conyugal_beneficiario3');
                    break;
                case "inversion":
                    validarCampo(expresiones.pesos, e.target, 'inversion_numero_a');
                    break;
                default:
                    if (!isNaN(input.value)) {
                        validarCampo(expresiones.number, e.target, e.target.id);

                    } else {

                        validarCampo(expresiones.all_input, e.target, e.target.id);

                    }
                    break;
            }
        }

        const campos = {
            name: false,
            last_name: false,
            password: false,
            correo: false,
            telefono: false,
            fecha: false
        }

        const validarCampo = (expresion, input, campo) => {

            function validador_select(input) {
                const regex = /\d/;

                if (input.value == "noselecciono" || input.value == "S/n" || input.value == "Elegir respuesta...") {

                    if (validacion_select.includes(input.name) || campo == "rendimiento" || regex.test(input.name)) {
                        document.getElementById(`${input.id}`).classList.add('form-control-error');
                        document.querySelector(`#msj__${input.id}.error-tooltip`).classList.add('activo');
                        campos[campo] = false;
                    }
                } else {

                    if (validacion_select.includes(input.name) || campo == "rendimiento" || regex.test(input.name)) {
                        document.getElementById(`${input.id}`).classList.remove('form-control-error');
                        if (expresion.test(input.value) || regex.test(input.name)) {
                            // document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
                            document.getElementById(`${input.id}`).classList.add('form-control');
                            document.getElementById(`${input.id}`).classList.add('form-control-valid');
                            // document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
                            // document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
                            document.querySelector(`#msj__${input.id}.error-tooltip`).classList.remove('activo');
                            campos[campo] = true;
                        } else {


                            document.getElementById(`${campo}`).classList.add('form-control-error');
                            // document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                            // document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
                            // document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

                            document.querySelector(`#msj__${campo}.error-tooltip`).classList.add('activo');
                            campos[campo] = false;
                        }
                    }
                }
            }
            const regex = /\d/;
            switch (campo) {

                case 'born':

                    if (expresion.test(input)) {
                        document.getElementById(`${campo}`).classList.remove('form-control-error');
                        document.getElementById(`${campo}`).classList.add('form-control');
                        document.getElementById(`${campo}`).classList.add('form-control-valid');
                        // document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
                        // document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
                        document.querySelector(`#msj__${campo}.error-tooltip`).classList.remove('activo');
                        campos[campo] = true;
                    } else {
                        if (validacion_select.includes(campo)) {
                            document.getElementById(`${campo}`).classList.add('form-control-error');
                            // document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                            // document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
                            // document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

                            document.querySelector(`#msj__${campo}.error-tooltip`).classList.add('activo');
                            campos[campo] = false;
                        }
                    }
                    break;
                case 'nacionalidad_general':
                    validador_select(input);

                    break;
                case 'nacionalidad_beneficiario1':

                    validador_select(input);

                    break;
                case 'nacionalidad_beneficiario2':

                    validador_select(input);

                    break;
                case 'nacionalidad_beneficiario3':

                    validador_select(input);

                    break;
                case 'estado_nacimiento_general':
                    campo = 'estado_nacimiento';
                    validador_select(input);

                    break;
                case 'ciudad_general':

                    validador_select(input);

                    break;
                case 'estado_civil':

                    validador_select(input);

                    break;
                case 'estado_civil_beneficiario1':

                    validador_select(input);

                    break;
                case 'estado_civil_beneficiario2':

                    validador_select(input);

                    break;
                case 'estado_civil_beneficiario3':

                    validador_select(input);

                    break;
                case 'regimen_conyugal':

                    validador_select(input);

                    break;
                case 'rendimiento':

                    validador_select(input);

                    break;
                case 'ciudad_residencia':

                    //validador_select(input);

                    break;
                case 'estado':


                    //validador_select(input);
                    break;
                case 'inversion_letra':


                    //validador_select(input);
                    break;

                case 'BeneficiarioChecked':
                    break;
                default:
                    document.getElementById(`${campo}`).classList.remove('form-control-error');

                    if (expresion.test(input.value)) {
                        // document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
                        document.getElementById(`${campo}`).classList.add('form-control');
                        document.getElementById(`${campo}`).classList.add('form-control-valid');
                        // document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
                        // document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');

                        if (document.querySelector(`#msj__${campo}.error-tooltip`)) {
                            document.querySelector(`#msj__${campo}.error-tooltip`).classList.remove('activo');
                        } else {
                            document.querySelector(`#msj__${input.name}.error-tooltip`).classList.remove('activo');
                        }
                        campos[campo] = true;
                    } else {

                        if (validacion_input.includes(campo) || campo == "inversion_numero_a" || expresion.test(input.value)) {
                            document.getElementById(`${campo}`).classList.add('form-control-error');
                            // document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                            // document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
                            // document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

                            document.querySelector(`#msj__${campo}.error-tooltip`).classList.add('activo');
                            campos[campo] = false;
                        }
                    }
                    break;


            }




        }


        x = document.getElementsByClassName("step");
        input = x[contador_inversores].querySelectorAll('input')
        input.forEach((input) => {

            if (input.value == "ciudad_residencia" || input.value == "estado" || input.value == "BeneficiarioChecked" || input.value == "inversion_letra") {

            } else {
                input.addEventListener('keyup', validarFormulario);
                input.addEventListener('blur', validarFormulario);
            }
        });
        select = x[contador_inversores].querySelectorAll('select')
        select.forEach((select) => {

            select.addEventListener('blur', validarFormulario);
        });

        for (i = 0; i < validacion_select.length; i++) {

            Get_name = "grupo__" + validacion_select[i];
            if (Get_name == 'plazo_inversion') {
                Get_name = "grupo__plazo_inversion";
            }

            if (validacion_select[i] == 'rendimiento-inv') {
                Get_name = "grupo__rendimiento";
            }
            var div = document.getElementById(Get_name);
            var spans = div.getElementsByTagName("span");
            if (spans.length > 0) {
                spans[0].innerHTML += '<span >*</span>';
            } else {
                var label = div.getElementsByTagName("label");
                label[0].innerHTML += '<span >*</span>';
            }

        }
