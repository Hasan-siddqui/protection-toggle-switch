        // Function to enable all protections
        function enableProtection() {
            // Disable right-click context menu
            document.addEventListener('contextmenu', preventContextMenu, false);

            // Disable specific keyboard shortcuts
            document.onkeydown = function (e) {
                if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "U")) {
                    e.preventDefault();
                    return false;
                }
            };

            // Block Ctrl + U
            document.addEventListener('keydown', blockCtrlU);

            // Block Ctrl + Shift + J
            document.addEventListener('keydown', blockCtrlShiftJ);

            // Block Ctrl + Shift + C
            document.addEventListener('keydown', blockCtrlShiftC);

            // Prevent image dragging
            document.addEventListener('dragstart', preventDefault);

            // Preventing right-click on images specifically
            document.querySelectorAll('img').forEach(img => {
                img.addEventListener('contextmenu', preventContextMenu);
            });

            // Prevent copying text
            document.addEventListener('copy', preventCopy);

            // Preventing selection of text
            document.addEventListener('selectstart', preventDefault);

            // MacOS specific prevention for Command shortcuts
            document.addEventListener('keydown', blockMacShortcuts);
        }

        // Function to disable all protections
        function disableProtection() {
            document.removeEventListener('contextmenu', preventContextMenu);
            document.removeEventListener('keydown', blockCtrlU);
            document.removeEventListener('keydown', blockCtrlShiftJ);
            document.removeEventListener('keydown', blockCtrlShiftC);
            document.removeEventListener('dragstart', preventDefault);
            document.removeEventListener('copy', preventCopy);
            document.removeEventListener('selectstart', preventDefault);
            document.removeEventListener('keydown', blockMacShortcuts);
        }

        // Helper functions
        function preventContextMenu(e) {
            e.preventDefault();
        }

        function blockCtrlU(e) {
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            }
        }

        function blockCtrlShiftJ(e) {
            if (e.ctrlKey && e.shiftKey && e.key === "J") {
                e.preventDefault();
            }
        }

        function blockCtrlShiftC(e) {
            if (e.ctrlKey && e.shiftKey && e.key === "C") {
                e.preventDefault();
            }
        }

        function preventCopy(e) {
            e.preventDefault();
        }

        function preventDefault(e) {
            e.preventDefault();
        }

        function blockMacShortcuts(e) {
            if (e.metaKey && (e.shiftKey && (e.key === "I" || e.key === "J") || e.key === "U" || e.key === "S")) {
                e.preventDefault();
            }
        }

        // Toggle button functionality
        const toggleButton = document.getElementById('toggle-button');
        let protectionEnabled = false;

        toggleButton.addEventListener('click', () => {
            protectionEnabled = !protectionEnabled;
            if (protectionEnabled) {
                enableProtection();
                toggleButton.textContent = '';
            } else {
                disableProtection();
                toggleButton.textContent = '';
            }
        });