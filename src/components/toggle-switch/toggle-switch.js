import "./toggle-switch.css";

const ToggleSwitch = ({ id, checked, onToggle, optionLabels }) => {

    return (
        <div className="toggle-switch small-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                id={ id }
                checked={ checked }
                onChange={ (e) => onToggle(e.target.checked) }
            />

            <label className="toggle-switch-label" htmlFor={id} >
                  <span
                      className="toggle-switch-inner"
                      data-yes={optionLabels[0]}
                      data-no={optionLabels[1]}
                      tabIndex={-1}
                  />
                <span
                    className="toggle-switch-switch"
                    tabIndex={-1}
                />
            </label>
        </div>
    );
};

ToggleSwitch.defaultProps = {
    optionLabels: ["yes", "no"]
};

export default ToggleSwitch;
