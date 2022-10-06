import {
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState} from "react";
import EditStyled from "../wrappers/Edit";

export default function Edit({ item, setLocal }) {
  const [localItem, setItem] = useState(item);
  const [saving, setSaving] = useState(false);
  function save() {
    setSaving(true);
    setLocal(localItem);
  }
  return (
    <EditStyled>
      <div id='edit-container'>
        <input
          id='title'
          type='text'
          value={localItem.title}
          placeholder='Title'
          onChange={(e) => {
            setItem({ ...localItem, ...{ title: e.target.value } });
          }}
        />
        <textarea
          id='description'
          value={localItem.description}
          placeholder='Description'
          onChange={(e) => {
            setItem({ ...localItem, ...{ description: e.target.value } });
          }}
        />
        <button id='save' className={saving ? "saving" : ""} onClick={save}>
          {saving ? <FontAwesomeIcon icon={faPaperPlane} /> : "Save"}
        </button>
      </div>
    </EditStyled>
  );
}
