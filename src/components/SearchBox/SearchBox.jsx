import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from '../redux/filtersSlice';

const SearchBox = () => {
  const searchTerm = useSelector((state) => state.filters.filters.name);

  const dispatch = useDispatch();

  const handleSearchChange = (evt) => {
    dispatch(changeFilter(evt.target.value.trim() || ""));
  };
  return (
    <div>
      <div>
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="пошук"
          type="text"
          name="searchInput"
        />
      </div>
    </div>
  );
};

export default SearchBox;