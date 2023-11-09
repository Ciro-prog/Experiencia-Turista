import React, { useState, useEffect } from "react";

const useHospedajes = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        // Importa los datos desde el archivo JSON
        const result = await import('../data/hospedajes.json');
        
        setData(result.default);
      } catch (error) {
        setIsError(true);
        console.error("Error al cargar los datos", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const refetch = () => {
    // Puedes dejar esto así o implementar una lógica para recargar los datos
  };

  return { data, isLoading, isError, refetch };
};

export default useHospedajes;