:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --light-bg: #f8f9fa;
  --dark-text: #2c3e50;
  --light-text: #ecf0f1;
}

@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.rumus {
  transition: all 0.3s ease;
  cursor: pointer;
}

.rumus:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: var(--secondary-color);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.rumus-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

.rumus-table th, .rumus-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.rumus-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.dark-mode {
  background-color: var(--secondary-color);
  color: var(--light-text);
}

.dark-mode .bab {
  background-color: #34495E;
  color: var(--light-text);
}
.utility-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

#searchInput {
  padding: 10px;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.bookmarked {
  border-left: 4px solid var(--accent-color) !important;
}
