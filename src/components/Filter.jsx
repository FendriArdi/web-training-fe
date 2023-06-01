import { useState } from "react";
import PropTypes from "prop-types";
import { BiX } from "react-icons/bi";

export const Filter = ({ onTextChange, filterText, onFilter, onClear }) => {
    const [column, setColumn] = useState("name");

    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col">
                <label className="text-xs text-neutral-2">Kata kunci</label>
                <input
                    onChange={(e) => onTextChange(e.target.value)}
                    value={filterText}
                    type="text"
                    className="input-field mt-0 text-sm"
                    placeholder="Masukkan kata kunci"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-neutral-2">FIlter berdasarkan</label>
                <select
                    type="text"
                    className="input-field mt-0 text-sm"
                    onChange={(e) => setColumn(e.target.value)}
                >
                    <option value="name">Nama pelatihan</option>
                    <option value="purpose">Tujuan pelatihan</option>
                    <option value="organizer">Penyelenggara</option>
                    <option value="status">Status</option>
                </select>
            </div>
            {filterText !== "" && (
                <button
                    className="btn btn-secondary px-2 py-4 text-red-600 bg-red-50 hover:bg-red-100 self-end"
                    onClick={() => onClear()}
                >
                    <BiX />
                </button>
            )}
            <button className="btn btn-primary m-0 self-end" onClick={() => onFilter(column)}>
                Terapkan
            </button>
        </div>
    );
};

Filter.propTypes = {
    onTextChange: PropTypes.func,
    filterText: PropTypes.string,
    onFilter: PropTypes.func,
    onClear: PropTypes.func,
};
