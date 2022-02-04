const ExchangeRate = ({
  exchangedData
}) => {
  console.log(exchangedData.exchangeRate)
  const rate = exchangedData.exchangeRate
  return (
    <div className="exchange-rate">
      <h3>ExchangeRate</h3>
      <p>{rate}</p>
      <p>
        {exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}
      </p>
    </div>
  );
};

export default ExchangeRate;
