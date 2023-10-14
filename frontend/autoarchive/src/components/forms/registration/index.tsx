import axios from "axios";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schema } from "./yupSchema";
import {
  StyledFormContainer,
  StyledFormEditContainer,
} from "./FormContainer.style";
import { formatCurrency } from "../../../utils/masks.js";
import { useEditContext } from "../../../context/editContext.js";

//

interface CarFormProps {
  edit: string;
}

//

const CarForm: React.FC<CarFormProps> = ({ edit }) => {
  const [modelos, setModelos] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [sucess, setSucess] = useState<string>("");
  const { carDataContext, setEditString, marcaModelContext, carColorsContext } =
    useEditContext();

  useEffect(() => {
    handleMarcaChange(carDataContext.marca);
    // eslint-disable-next-line
  }, []);

  const handleMarcaChange = (
    e: React.ChangeEvent<HTMLSelectElement> | string
  ) => {
    const selectedMarca = typeof e === "string" ? e : e.target.value;
    const selectedModelos =
      marcaModelContext.find((marca) => marca.marca === selectedMarca)
        ?.modelos || [];

    console.log(selectedModelos, marcaModelContext);
    setModelos(selectedModelos);
  };

  if (!edit) {
    return (
      <StyledFormContainer>
        <Formik
          initialValues={{
            marca: "",
            modelo: "",
            anoFabricacao: "",
            preco: "",
            chassi: "",
            cor: "",
          }}
          validationSchema={schema}
          onSubmit={async (values, { resetForm }) => {
            //
            const convertedValues = {
              marca: values.marca,
              modelo: values.modelo,
              cor: values.cor,
              chassi: values.chassi,
              ano: Number(values.anoFabricacao),
              preco: Number(values.preco.replace(/[.,]/g, "")),
            };
            await axios
              .post("/api/v1/create-car", convertedValues)
              .then((response) => {
                console.log("Registro criado com sucesso:", response.data);
                setSucess("Veículo Cadastrado com sucesso");
                setTimeout(() => {
                  setSucess("");
                }, 3500);
                resetForm();
              })
              .catch((error) => {
                console.error(
                  "Erro ao criar registro:",
                  error.response ? error.response.data : error.message
                );
                try {
                  const { code } = error.response.data.error;
                  if (code === 11000) {
                    setError("Chassi já cadastrado para outro veículo");
                    setTimeout(() => {
                      setError("");
                    }, 3500);
                  }
                } catch {
                  setError(
                    "Erro ao cadastrar o veículo, verique o status do servidor"
                  );
                  setTimeout(() => {
                    setError("");
                  }, 3500);
                }
              });
            console.log(convertedValues);
          }}
        >
          {({ handleChange, values }) => (
            <Form>
              <p>
                <span>Dica</span>: Selecione primeiro a Marca para visualizar os
                modelos disponíveis.
              </p>
              <section>
                <div>
                  <label htmlFor="marca">Marca</label>
                  <Field
                    as="select"
                    id="marca"
                    name="marca"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(e);
                      handleMarcaChange(e);
                    }}
                  >
                    <option value="" label="Selecione a Marca" />
                    {marcaModelContext.map((marca) => (
                      <option
                        key={marca.marca}
                        value={marca.marca}
                        label={marca.marca}
                      />
                    ))}
                  </Field>
                  <ErrorMessage
                    name="marca"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="modelo">Modelo</label>
                  <Field
                    as="select"
                    id="modelo"
                    name="modelo"
                    onChange={handleChange}
                  >
                    <option value="" label="Selecione o Modelo" />
                    {modelos.map((modelo: string) => (
                      <option key={modelo} value={modelo} label={modelo} />
                    ))}
                  </Field>
                  <ErrorMessage
                    name="modelo"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="cor">Cor</label>
                  <Field
                    as="select"
                    id="cor"
                    name="cor"
                    onChange={handleChange}
                  >
                    <option value="" label="Selecione a Cor" />
                    {carColorsContext.map((modelo: string) => (
                      <option key={modelo} value={modelo} label={modelo} />
                    ))}
                  </Field>
                  <ErrorMessage name="cor" component="div" className="error" />
                </div>
              </section>

              <div>
                <div>
                  <Field
                    type="text"
                    id="anoFabricacao"
                    name="anoFabricacao"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="anoFabricacao">
                    <span>Ano de Fabricação</span>
                  </label>
                </div>
                <ErrorMessage
                  name="anoFabricacao"
                  component="div"
                  className="error"
                />
                <div>
                  <Field
                    type="text"
                    id="preco"
                    name="preco"
                    value={formatCurrency(values.preco)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const formattedValue = formatCurrency(e.target.value);
                      console.log(formattedValue);
                      handleChange({
                        target: {
                          name: "preco",
                          value: formattedValue,
                        },
                      } as React.ChangeEvent<HTMLInputElement>);
                    }}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="preco">
                    <span>Preço</span>
                  </label>
                </div>
                <ErrorMessage name="preco" component="div" className="error" />
                <div>
                  <Field
                    type="text"
                    id="chassi"
                    name="chassi"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="chassi">
                    <span>Chassi</span>
                  </label>
                </div>
                <ErrorMessage name="chassi" component="div" className="error" />
              </div>

              <button type="submit">Enviar</button>
              {error && <p className="error">{error}</p>}
              {sucess && <p className="sucess">{sucess}</p>}
            </Form>
          )}
        </Formik>
      </StyledFormContainer>
    );
  } else {
    return (
      <StyledFormEditContainer>
        <Formik
          initialValues={{
            marca: carDataContext.marca,
            modelo: carDataContext.modelo,
            anoFabricacao: carDataContext.ano,
            preco: carDataContext.preco,
            chassi: carDataContext.chassi,
            cor: carDataContext.cor,
          }}
          validationSchema={schema}
          onSubmit={async (values) => {
            //
            const convertedValues = {
              marca: values.marca,
              modelo: values.modelo,
              cor: values.cor,
              chassi: values.chassi,
              ano: Number(values.anoFabricacao),
              preco: Number(values.preco.replace(/[.,]/g, "")),
            };
            //
            await axios
              .put(`/api/v1/edit-car/${values.chassi}`, convertedValues)
              .then((response) => {
                console.log("Registro criado com sucesso:", response.data);
                setSucess("Veículo Editado com Sucesso");
                setTimeout(() => {
                  setSucess("");
                  setEditString("");
                  //window.location.reload();
                }, 2000);
              })
              .catch((error) => {
                console.error(
                  "Erro ao criar registro:",
                  error.response ? error.response.data : error.message
                );
                try {
                  const { code } = error.response.data.error;
                  if (code === 11000) {
                    setError("Chassi já cadastrado para outro veículo");
                    setTimeout(() => {
                      setError("");
                    }, 3500);
                  }
                } catch {
                  setError(
                    "Erro ao atualizar o veículo, verique o status do servidor"
                  );
                  setTimeout(() => {
                    setError("");
                  }, 3500);
                }
              });
          }}
        >
          {({ handleChange, values }) => (
            <Form>
              <section>
                <div>
                  <label htmlFor="marca">Marca</label>
                  <Field
                    as="select"
                    id="marca"
                    name="marca"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handleChange(e);
                      handleMarcaChange(e);
                    }}
                  >
                    <option value="" label="Selecione a Marca" />
                    {marcaModelContext.map((marca) => (
                      <option
                        key={marca.marca}
                        value={marca.marca}
                        label={marca.marca}
                      />
                    ))}
                  </Field>
                  <ErrorMessage
                    name="marca"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  {}
                  <label htmlFor="modelo">Modelo</label>
                  <Field
                    as="select"
                    id="modelo"
                    name="modelo"
                    onChange={handleChange}
                  >
                    <option value="" label="Selecione o Modelo" />
                    {modelos.map((modelo: string) => (
                      <option key={modelo} value={modelo} label={modelo} />
                    ))}
                  </Field>
                  <ErrorMessage
                    name="modelo"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <label htmlFor="cor">Cor</label>
                  <Field
                    as="select"
                    id="cor"
                    name="cor"
                    onChange={handleChange}
                  >
                    <option value="" label="Selecione a Cor" />
                    {carColorsContext.map((modelo: string) => (
                      <option key={modelo} value={modelo} label={modelo} />
                    ))}
                  </Field>
                  <ErrorMessage name="cor" component="div" className="error" />
                </div>
              </section>

              <div>
                <div>
                  <Field
                    type="text"
                    id="anoFabricacao"
                    name="anoFabricacao"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="anoFabricacao">
                    <span>Ano de Fabricação</span>
                  </label>
                </div>
                <ErrorMessage
                  name="anoFabricacao"
                  component="div"
                  className="error"
                />
                <div>
                  <Field
                    type="text"
                    id="preco"
                    name="preco"
                    value={formatCurrency(values.preco)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const formattedValue = formatCurrency(e.target.value);
                      handleChange({
                        target: {
                          name: "preco",
                          value: formattedValue,
                        },
                      } as React.ChangeEvent<HTMLInputElement>);
                    }}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="preco">
                    <span>Preço</span>
                  </label>
                </div>
                <ErrorMessage name="preco" component="div" className="error" />
                <div>
                  <Field
                    type="text"
                    id="chassi"
                    name="chassi"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="chassi">
                    <span>Chassi</span>
                  </label>
                </div>
                <ErrorMessage name="chassi" component="div" className="error" />
              </div>

              <div className="formFooter">
                <button type="submit">Confirmar</button>
                <button onClick={() => setEditString("")}>Cancelar</button>
              </div>
              {error && <p className="error">{error}</p>}
              {sucess && <p className="sucess">{sucess}</p>}
            </Form>
          )}
        </Formik>
      </StyledFormEditContainer>
    );
  }
};

export default CarForm;
