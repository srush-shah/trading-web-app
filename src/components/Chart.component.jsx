import React, { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import WebSocket from "isomorphic-ws";

const Chart = () => {
  const [data, setData] = useState({
    e: "kline", // Event type
    E: 1638747660000, // Event time
    s: "BTCUSDT", // Symbol
    k: {
      t: 1638747660000, // Kline start time
      T: 1638747719999, // Kline close time
      s: "BTCUSDT", // Symbol
      i: "1m", // Interval
      f: 100, // First trade ID
      L: 200, // Last trade ID
      o: "0.0010", // Open price
      c: "0.0020", // Close price
      h: "0.0025", // High price
      l: "0.0015", // Low price
      v: "1000", // Base asset volume
      n: 100, // Number of trades
      x: false, // Is this kline closed?
      q: "1.0000", // Quote asset volume
      V: "500", // Taker buy base asset volume
      Q: "0.500", // Taker buy quote asset volume
      B: "123456", // Ignore
    },
  });
  const chartContainerRef = useRef();

  useEffect(() => {
    const wss = new WebSocket("wss://fstream.binance.com/ws/btcusdt@kline_24h");
    wss.onmessage = (message) => {
      console.log(JSON.parse(message.data));
      setData(JSON.parse(message.data));
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        backgroundColor: "#253248",
      },
      grid: {
        vertLines: {
          color: "#334158",
        },
        horzLines: {
          color: "#334158",
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485158",
      },
      width: chartContainerRef.current.clientWidth,
      height: 600,
    });
    chart.timeScale().fitContent();

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });
    candleSeries.setData([
      {
        open: data.k.o,
        high: data.k.h,
        low: data.k.l,
        close: data.k.c,
        time: data.E,
      },
    ]);
    candleSeries.update({
      open: data.k.o,
      high: data.k.h,
      low: data.k.l,
      close: data.k.c,
      time: data.E,
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default Chart;
