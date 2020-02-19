import React from 'react';

import './SelectedItems.scss';

const Item = ({ item, onRemoveItem }) => {
    const onClickRemove = React.useCallback(() => onRemoveItem(item.value), [onRemoveItem, item]);

    return (
        <span className="selected-items__item">
            {item.label}
            <span 
                className="selected-items__remove-item-btn"
                onClick={onClickRemove}
            >
                &times;
            </span>
        </span>
    )
} 

const SelectedItems = ({ items=[], onRemoveItem }) => {
    if (items.length === 0) {
        return (
            <div className="selected-items selected-items_empty">Select Items...</div>
        )
    }

    return (
        <div className="selected-items">
            {
                items.map((item) => (
                    <Item 
                        item={item} 
                        onRemoveItem={onRemoveItem} 
                        key={`selected-item-${item.value}`} 
                    />
                ))
            }
        </div>
    )
}

export default SelectedItems;