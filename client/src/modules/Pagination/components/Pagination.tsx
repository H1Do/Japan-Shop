import Button from '../../../UI/Button/Button';
import createRange from '../helpers/createRange';

interface Props {
  totalPages: number;
  setPage: (page: number) => void;
  currentPage: number;
  className: string;
}

const Pagination = ({
  totalPages,
  setPage,
  currentPage,
  className,
  ...args
}: Props) => {
  return (
    <div className={`${className} pagination`} {...args}>
      <ol className="pagination__list">
        {createRange(1, totalPages).map((pageNumber) => (
          <li className="pagination__item" key={pageNumber}>
            <Button
              className={`pagination__button ${currentPage === pageNumber ? 'pagination__button--selected' : ''}`}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          </li>
        ))}
        <li className="pagination__item">
          <Button
            className={`pagination__button pagination__button--next`}
            onClick={() => {
              if (currentPage < totalPages) {
                setPage(currentPage + 1);
              }
            }}
          >
            Next
          </Button>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
