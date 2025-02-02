let is24HourFormat = false;
        let showSeconds = true;
        let currentTheme = 'cyan';

        // DOM Elements
        const clockElement = document.getElementById('clock');
        const dateElement = document.getElementById('date');
        const toggleFormatBtn = document.getElementById('toggleFormat');
        const toggleSecondsBtn = document.getElementById('toggleSeconds');
        const themeDots = document.querySelectorAll('.theme-dot');

        // Theme colors configuration
        const themes = {
            cyan: { primary: '#00ff9d', bg: '#1a1a1a' },
            red: { primary: '#ff006a', bg: '#1a1a1a' },
            blue: { primary: '#00a3ff', bg: '#1a1a1a' },
            purple: { primary: '#ae00ff', bg: '#1a1a1a' }
        };

        // Update time function
        function updateTime() {
            const now = new Date();
            
            // Get time components
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            
            // Format hours
            if (!is24HourFormat) {
                const amPm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12;
                const timeString = showSeconds 
                    ? `${hours}:${minutes}:${seconds} ${amPm}` 
                    : `${hours}:${minutes} ${amPm}`;
                clockElement.textContent = timeString;
            } else {
                hours = hours.toString().padStart(2, '0');
                const timeString = showSeconds 
                    ? `${hours}:${minutes}:${seconds}` 
                    : `${hours}:${minutes}`;
                clockElement.textContent = timeString;
            }

            // Add update animation
            clockElement.classList.add('updating');
            setTimeout(() => clockElement.classList.remove('updating'), 500);

            // Update date
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = now.toLocaleDateString('en-US', options);
        }

        // Theme switching
        function setTheme(theme) {
            const colors = themes[theme];
            document.documentElement.style.setProperty('--primary-color', colors.primary);
            document.documentElement.style.setProperty('--bg-color', colors.bg);
            currentTheme = theme;
        }

        // Event Listeners
        toggleFormatBtn.addEventListener('click', () => {
            is24HourFormat = !is24HourFormat;
            updateTime();
        });

        toggleSecondsBtn.addEventListener('click', () => {
            showSeconds = !showSeconds;
            updateTime();
        });

        themeDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const theme = dot.dataset.theme;
                setTheme(theme);
            });
        });

        // Initial setup
        setTheme(currentTheme);
        updateTime();
        setInterval(updateTime, 1000);