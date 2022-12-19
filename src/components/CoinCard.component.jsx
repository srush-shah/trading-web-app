import React, { useState, useEffect } from "react";
import WebSocket from "isomorphic-ws";

//Components
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

//Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CoinCard = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const wss = new WebSocket("wss://fstream.binance.com/ws/ethusdt@markPrice");
    wss.onmessage = (message) => {
      setData(JSON.parse(message.data));
    };
  }, []);
  return (
    <>
      <Card sx={{ background: "#1F1F24", borderRadius: 0 }}>
        <CardContent
          sx={{
            display: "flex",
            background: "#2C2C34",
            width: "98%",
            margin: "0 auto",
            borderRadius: "0",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                borderRight: "1px solid #484852",
                alignItems: "center",
                px: 2,
                gap: 1,
                height: "80%",
                my: "auto",
              }}
            >
              <IconButton>
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png"
                  alt="Etherium symbol"
                  style={{ width: "48px" }}
                />
              </IconButton>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography fontSize={20} color={"#FCFCFC"}>
                  ETHUSDT
                </Typography>
                <Typography fontSize={14} color={"#A9A9A9"}>
                  Perpetual
                </Typography>
              </Box>
              <IconButton sx={{ background: "#56565D", p: 1 }}>
                <ExpandMoreIcon sx={{ color: "#E2FF6F" }} />
              </IconButton>
            </Box>
            <Typography
              sx={{
                mx: 3,
                my: "auto",
                color: "#00BD84",
                fontSize: 28,
              }}
            >
              $40,988
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3, m: "auto", pr: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                Mark
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>
                {parseInt(data.p).toFixed(3)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                Index
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>
                {parseInt(data.i).toFixed(3)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                24h High
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>40,564.60</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                24h Low
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>40,564.60</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                24h change
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>+564.60(4.01%)</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                24h Volume(USDT)
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>123,240,564.60</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                Funding/Countdown
              </Typography>
              <Typography sx={{ color: "#FCFCFC" }}>
                {data.r}% hh:mm:ss
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#A9A9A9" }} fontSize={15}>
                Open interest
              </Typography>
              <Typography sx={{ color: "#FCFCFC", msWrapFlow: "auto" }}>
                123,240,564.60
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CoinCard;
