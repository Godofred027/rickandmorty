export default function Paginate({ page, setPage }) {
  return (
    <div className="flex flex-row">
      <button
        className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}
      >
        Previous
      </button>
      <button
        className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
        onClick={() => {
          page < 43 && setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
