import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

function InputRangeSlider({ price, setPrice, setYearly }) {

    const updatePrice = updatedPrice => {
        setPrice(updatedPrice);
        setYearly(false);
    };

    return (
        <InputRange
            minValue={ 20 }
            maxValue={ 60 }
            value={ price }
            onChange={ value => updatePrice(value) }
        />
    );
}

export default InputRangeSlider;
