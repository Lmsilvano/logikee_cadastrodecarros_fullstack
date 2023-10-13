import { createContext, useContext, useState, useEffect } from "react";
import { CarProps } from "../utils/interfaces/carProps";
import { carData, carColors } from "../utils/fakeData";

//
interface MarcaModel {
  marca: string;
  modelos: string[];
}

// Simula o Recebimento de Marcas, Modelos e Cores de Carros da API
const fetchMarcaModelData = async (): Promise<MarcaModel[]> => {
  return carData;
};
const fetchCarColors = async (): Promise<string[]> => {
  return carColors;
};

//
type EditContextType = {
  editString: string;
  setEditString: React.Dispatch<React.SetStateAction<string>>;
  carDataContext: CarProps;
  setCarDataContext: React.Dispatch<React.SetStateAction<CarProps>>;
  marcaModelContext: MarcaModel[];
  setMarcaModelContext: React.Dispatch<React.SetStateAction<MarcaModel[]>>;
  carColorsContext: string[];
  setCarColorsContext: React.Dispatch<React.SetStateAction<string[]>>;
};

const initialEditContextValue: EditContextType = {
  editString: "",
  setEditString: () => {},
  carDataContext: {
    id: "",
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    chassi: "",
    preco: "",
  },
  setCarDataContext: () => {},
  marcaModelContext: [
    {
      marca: "",
      modelos: [""],
    },
  ],
  setMarcaModelContext: () => {},
  carColorsContext: [""],
  setCarColorsContext: () => {},
};

const EditContext = createContext<EditContextType>(initialEditContextValue);

const EditContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editString, setEditString] = useState<string>("");
  const [carDataContext, setCarDataContext] = useState<CarProps>({
    id: "",
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    chassi: "",
    preco: "",
  });
  const [marcaModelContext, setMarcaModelContext] = useState<MarcaModel[]>([]);
  const [carColorsContext, setCarColorsContext] = useState<string[]>([""]);

  //
  useEffect(() => {
    const fetchData = async () => {
      const marcaModelData = await fetchMarcaModelData(); //
      const colorsData = await fetchCarColors(); //
      setMarcaModelContext(marcaModelData);
      setCarColorsContext(colorsData);
    };

    fetchData();
  }, []);

  return (
    <EditContext.Provider
      value={{
        editString,
        setEditString,
        carDataContext,
        setCarDataContext,
        marcaModelContext,
        setMarcaModelContext,
        carColorsContext,
        setCarColorsContext,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

const useEditContext = () => {
  const context = useContext(EditContext);

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { EditContextProvider, useEditContext };
