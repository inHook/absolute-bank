import React from "react";

import "./style.scss";

export const Input = ({name, type, placeholder, placeholderImage, classNames, onChange}) => (
    <div className="input-ui__wrapper">
        <div className="input-ui__inner">
            {placeholderImage && (
                <span className="input-ui__placeholder-image">{placeholderImage}</span>
            )}
            <input
                type={type}
                name={name}
                className={`input-ui${classNames ? ` ${classNames}` : ""}`}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    </div>
);