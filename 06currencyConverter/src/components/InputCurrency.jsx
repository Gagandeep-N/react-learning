function InputCurrency({
    amount,
    onAmountChange,
    selectCurrency,
    onCurrencyChange,
    currencyOptions=[]
}) {
    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(event) => onAmountChange(event.target.value)}
            />
            <select value={selectCurrency} onChange={(event) => onCurrencyChange(event.target.value)}>
                {currencyOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default InputCurrency;