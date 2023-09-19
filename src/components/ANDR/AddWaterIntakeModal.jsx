import React, { useState } from 'react';
import css from './modals.module.css';

const AddWaterIntakeModal = () => {
  const [water, setWater] = useState('');
  return (
    <div className={css.divPadding}>
      <h2 className={css.sizeH2}>Add water intake</h2>
      <div className={css.divForm}>
        <h3 className={css.sizeH3}>How much water</h3>
      </div>

      <form id="meal-form">
        <div className={css.formGroup}>
          <input
            value={water}
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            placeholder="Enter milliliters"
            required
          />
        </div>
        <div className={css.formGroup}>
          <button type="button" id="add-more">
            Confirm
          </button>
        </div>
        <div className={css.formGroup}>
          <button type="button" id="cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWaterIntakeModal;

// function openModal() {
//   const modal = document.createElement('div');
//   modal.classList.add('modal');
//   modal.innerHTML = `
//   <div class="divPadding">
//     <h2 class="sizeH2">Add water intake</h2>
//     <div class="divForm">
//     <h3 class="sizeH3">How much water</h3>

//     <form id="meal-form">
//       <div class="form-group">
//         <input type="number" id="carbohydrates" name="carbohydrates" placeholder="Enter milliliters" required>
//       </div>
//       <div class="form-group">
//         <button type="button" id="add-more">Confirm</button>
//       </div>
//       <div class="form-group">
//         <button type="button" id="cancel">Cancel</button>
//     </form>
//     </div>
//     </div>
//   `;

//   document.body.appendChild(modal);

//   // Додавання обробників подій
//   const cancelButton = modal.querySelector('#cancel');
//   cancelButton.addEventListener('click', closeModal);

//   const confirmButton = modal.querySelector('#confirm');
//   confirmButton.addEventListener('click', saveDataToBackend);

//   const addMoreButton = modal.querySelector('#add-more');
//   addMoreButton.addEventListener('click', addMoreFields);
// }

// // Закриття модального вікна
// function closeModal() {
//   const modal = document.querySelector('.modal');
//   if (modal) {
//     modal.remove();
//   }
// }

// // Відправлення даних на бекенд
// function saveDataToBackend() {
//   // Реалізувати відправку даних на бекенд
// }

// // Додавання полів для ще одного продукту
// function addMoreFields() {
//   const mealForm = document.querySelector('#meal-form');
//   const newFields = mealForm.cloneNode(true);
//   mealForm.parentNode.insertBefore(newFields, mealForm.nextSibling);
// }

// // Виклик функції для відкриття модального вікна
// openModal();
