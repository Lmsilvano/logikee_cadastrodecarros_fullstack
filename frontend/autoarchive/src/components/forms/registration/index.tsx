import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { StyledFormContainer } from "./FormContainer.style";
import { formatCurrency } from "../../../utils/masks.js";
import { carData, carColors } from "../../../utils/fakeData.js";
interface MarcaModel {
  marca: string;
  modelos: string[];
}

// Simula o Recebimento de Marcas, Modelos e Cores de Carros da API
const fetchCarData = async (): Promise<MarcaModel[]> => {
  return carData;
};
const fetchCarColors = async (): Promise<string[]> => {
  return carColors;
};

//

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const schema = Yup.object().shape({
  marca: Yup.string().required("Campo obrigatório"),
  modelo: Yup.string().required("Campo obrigatório"),
  anoFabricacao: Yup.number()
    .required("Campo obrigatório")
    .min(1900, `Ano Inválido: digite um valor entre 1900 e ${anoAtual + 1}`)
    .max(
      anoAtual + 1,
      `Ano Inválido: digite um valor entre 1900 e ${anoAtual + 1}`
    ),
  preco: Yup.string().required("Campo obrigatório"),
  chassi: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6}$/,
      "Deve conter exatamente 6 caracteres alfanuméricos"
    )
    .required("Campo obrigatório"),

  cor: Yup.string().required("Campo obrigatório"),
});

const CarForm: React.FC = () => {
  const [marcas, setMarcas] = useState<MarcaModel[]>([]);
  const [modelos, setModelos] = useState<string[]>([]);
  const [cores, setCarColors] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCarData(); //
      const colorsData = await fetchCarColors(); //
      setMarcas(data);
      setCarColors(colorsData);
    };

    fetchData();
  }, []);

  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMarca = e.target.value;
    const selectedModelos =
      marcas.find((marca) => marca.marca === selectedMarca)?.modelos || [];
    setModelos(selectedModelos);
  };

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
        onSubmit={(values) => {
          //
          console.log(values);
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
                  {marcas.map((marca) => (
                    <option
                      key={marca.marca}
                      value={marca.marca}
                      label={marca.marca}
                    />
                  ))}
                </Field>
                <ErrorMessage name="marca" component="div" className="error" />
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
                <ErrorMessage name="modelo" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="cor">Cor</label>
                <Field as="select" id="cor" name="cor" onChange={handleChange}>
                  <option value="" label="Selecione a Cor" />
                  {cores.map((modelo: string) => (
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

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </StyledFormContainer>
  );
};

export default CarForm;
