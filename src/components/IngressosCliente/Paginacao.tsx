import React from 'react';

interface PaginacaoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination flex justify-center mt-5">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`bg-green-500 text-white px-4 py-2 rounded-md mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Anterior
      </button>
      <span className="text-gray-700 font-medium mr-2">{currentPage}</span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`bg-green-500 text-white px-4 py-2 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
