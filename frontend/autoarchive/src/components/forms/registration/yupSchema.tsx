import * as Yup from "yup";

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

export const schema = Yup.object().shape({
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
