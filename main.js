      let columns = [];

      function addColumn() {
        const name = document.getElementById("columnName").value.trim();
        const type = document.getElementById("columnType").value;
        const options = document.getElementById("columnOptions").value.trim();

        if (!name) {
          showStatus("Por favor ingresa un nombre para la columna", "error");
          return;
        }

        const column = {
          name: name,
          type: type,
          options: options ? options.split(",").map((opt) => opt.trim()) : [],
        };

        columns.push(column);
        updateColumnsList();

        // Limpiar campos
        document.getElementById("columnName").value = "";
        document.getElementById("columnOptions").value = "";

        showStatus(`Columna "${name}" agregada`, "success");
      }

      function removeColumn(index) {
        columns.splice(index, 1);
        updateColumnsList();
        showStatus("Columna eliminada", "warning");
      }

      function updateColumnsList() {
        const container = document.getElementById("columnsList");
        container.innerHTML = "";

        columns.forEach((col, index) => {
          const div = document.createElement("div");
          div.className = "column-item";
          div.innerHTML = `
                    <div class="column-info">
                        <div class="column-name">${col.name}</div>
                        <div class="column-type">Tipo: ${col.type} ${
            col.options.length ? `(${col.options.join(", ")})` : ""
          }</div>
                    </div>
                    <button class="btn-danger" onclick="removeColumn(${index})"><i class='fa-solid fa-trash'></i></button>
                `;
          container.appendChild(div);
        });
      }

      function loadExample(type) {
        columns = [];

        const examples = {
          products: [
            { name: "Nombre", type: "text", options: [] },
            { name: "Precio", type: "price", options: [] },
            { name: "Cantidad", type: "number", options: [] },
            {
              name: "Categoría",
              type: "category",
              options: ["electrónica", "ropa", "hogar", "deportes"],
            },
          ],
          employees: [
            { name: "Nombre Completo", type: "name", options: [] },
            { name: "Email", type: "email", options: [] },
            { name: "Teléfono", type: "phone", options: [] },
            {
              name: "Departamento",
              type: "category",
              options: ["Ventas", "Marketing", "IT", "RRHH", "Finanzas"],
            },
            { name: "Salario", type: "price", options: [] },
            { name: "Fecha Ingreso", type: "date", options: [] },
          ],
          customers: [
            { name: "Nombre", type: "name", options: [] },
            { name: "Email", type: "email", options: [] },
            { name: "Teléfono", type: "phone", options: [] },
            { name: "Ciudad", type: "city", options: [] },
            { name: "País", type: "country", options: [] },
            { name: "Cliente Premium", type: "boolean", options: [] },
          ],
          inventory: [
            { name: "Código", type: "text", options: [] },
            { name: "Producto", type: "text", options: [] },
            { name: "Stock", type: "number", options: [] },
            { name: "Precio Unitario", type: "price", options: [] },
            { name: "Proveedor", type: "company", options: [] },
            { name: "Fecha Ingreso", type: "date", options: [] },
          ],
          sales: [
            { name: "ID Venta", type: "text", options: [] },
            { name: "Cliente", type: "name", options: [] },
            { name: "Producto", type: "text", options: [] },
            { name: "Cantidad", type: "number", options: [] },
            { name: "Total", type: "price", options: [] },
            { name: "Fecha", type: "date", options: [] },
            { name: "Vendedor", type: "name", options: [] },
          ],
          students: [
            { name: "Nombre", type: "name", options: [] },
            { name: "Email", type: "email", options: [] },
            { name: "Edad", type: "number", options: [] },
            {
              name: "Carrera",
              type: "category",
              options: [
                "Ingeniería",
                "Medicina",
                "Derecho",
                "Administración",
                "Psicología",
              ],
            },
            { name: "Semestre", type: "number", options: [] },
            { name: "Promedio", type: "number", options: [] },
            { name: "Activo", type: "boolean", options: [] },
          ],
        };

        columns = examples[type] || [];
        updateColumnsList();
        showStatus(`Ejemplo "${type}" cargado`, "success");
      }

      function generateData() {
        const count =
          parseInt(document.getElementById("recordCount").value) || 100;
        const data = [];

        const sampleData = {
          names: [
            "Ana García",
            "Carlos López",
            "María Rodríguez",
            "Juan Pérez",
            "Laura Martínez",
            "Pedro Sánchez",
            "Carmen Ruiz",
            "David González",
            "Elena Fernández",
            "Miguel Torres",
          ],
          companies: [
            "TechCorp",
            "InnovaSoft",
            "GlobalTech",
            "DataSys",
            "WebSolutions",
            "CloudTech",
            "DigitalPro",
            "SoftwarePlus",
            "TechAdvance",
            "SystemsInc",
          ],
          cities: [
            "Madrid",
            "Barcelona",
            "Valencia",
            "Sevilla",
            "Bilbao",
            "Málaga",
            "Zaragoza",
            "Murcia",
            "Palma",
            "Córdoba",
          ],
          countries: [
            "España",
            "México",
            "Argentina",
            "Colombia",
            "Chile",
            "Perú",
            "Venezuela",
            "Ecuador",
            "Uruguay",
            "Paraguay",
          ],
          products: [
            "Laptop",
            "Smartphone",
            "Tablet",
            "Monitor",
            "Teclado",
            "Mouse",
            "Impresora",
            "Cámara",
            "Auriculares",
            "Micrófono",
          ],
        };

        for (let i = 0; i < count; i++) {
          const row = {};

          columns.forEach((col) => {
            switch (col.type) {
              case "text":
                if (col.options.length) {
                  row[col.name] =
                    col.options[Math.floor(Math.random() * col.options.length)];
                } else {
                  row[col.name] =
                    sampleData.products[
                      Math.floor(Math.random() * sampleData.products.length)
                    ] +
                    " " +
                    (i + 1);
                }
                break;
              case "number":
                if (col.name.toLowerCase().includes("edad")) {
                  row[col.name] = Math.floor(Math.random() * 50) + 18;
                } else if (col.name.toLowerCase().includes("semestre")) {
                  row[col.name] = Math.floor(Math.random() * 10) + 1;
                } else if (col.name.toLowerCase().includes("promedio")) {
                  row[col.name] = (Math.random() * 4 + 6).toFixed(2);
                } else {
                  row[col.name] = Math.floor(Math.random() * 100) + 1;
                }
                break;
              case "price":
                row[col.name] = (Math.random() * 1000 + 10).toFixed(2);
                break;
              case "email":
                const emailName = sampleData.names[
                  Math.floor(Math.random() * sampleData.names.length)
                ]
                  .toLowerCase()
                  .replace(" ", ".");
                row[col.name] = emailName + "@email.com";
                break;
              case "phone":
                row[col.name] =
                  "+34 " + Math.floor(Math.random() * 900000000 + 100000000);
                break;
              case "date":
                const date = new Date();
                date.setDate(date.getDate() - Math.floor(Math.random() * 365));
                row[col.name] = date.toLocaleDateString();
                break;
              case "boolean":
                row[col.name] = Math.random() > 0.5 ? "Sí" : "No";
                break;
              case "category":
                row[col.name] = col.options.length
                  ? col.options[Math.floor(Math.random() * col.options.length)]
                  : "Categoría " + (Math.floor(Math.random() * 5) + 1);
                break;
              case "name":
                row[col.name] =
                  sampleData.names[
                    Math.floor(Math.random() * sampleData.names.length)
                  ];
                break;
              case "company":
                row[col.name] =
                  sampleData.companies[
                    Math.floor(Math.random() * sampleData.companies.length)
                  ];
                break;
              case "address":
                row[col.name] =
                  "Calle " +
                  (Math.floor(Math.random() * 100) + 1) +
                  ", " +
                  (Math.floor(Math.random() * 50) + 1);
                break;
              case "city":
                row[col.name] =
                  sampleData.cities[
                    Math.floor(Math.random() * sampleData.cities.length)
                  ];
                break;
              case "country":
                row[col.name] =
                  sampleData.countries[
                    Math.floor(Math.random() * sampleData.countries.length)
                  ];
                break;
              case "url":
                row[col.name] = "https://www.ejemplo" + (i + 1) + ".com";
                break;
              case "percentage":
                row[col.name] = (Math.random() * 100).toFixed(1) + "%";
                break;
              default:
                row[col.name] = "Dato " + (i + 1);
            }
          });

          data.push(row);
        }

        return data;
      }

      function generateExcel() {
        if (columns.length === 0) {
          showStatus("Por favor agrega al menos una columna", "error");
          return;
        }

        showStatus("Generando archivo...", "warning");

        try {
          const data = generateData();
          const wb = XLSX.utils.book_new();
          const ws = XLSX.utils.json_to_sheet(data);

          XLSX.utils.book_append_sheet(wb, ws, "Datos");

          const fileName =
            document.getElementById("fileName").value.trim() ||
            "datos_generados";
          XLSX.writeFile(wb, fileName + ".xlsx");

          showStatus(
            `¡Archivo "${fileName}.xlsx" descargado exitosamente!`,
            "success"
          );
        } catch (error) {
          showStatus("Error al generar el archivo", "error");
          console.error(error);
        }
      }

      function showStatus(message, type) {
        const statusDiv = document.getElementById("status");
        let icon = "";
        if (type === "success")
          icon = '<i class="fa-solid fa-circle-check"></i>';
        else if (type === "error")
          icon = '<i class="fa-solid fa-circle-xmark"></i>';
        else if (type === "warning")
          icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
        else icon = "";
        statusDiv.innerHTML = icon + " " + message;
        statusDiv.className = "status " + type;

        if (type === "success") {
          setTimeout(() => {
            statusDiv.innerHTML = "";
            statusDiv.className = "status";
          }, 3000);
        }
      }

      // Cargar ejemplo de productos por defecto
      window.onload = function () {
        loadExample("products");
      };