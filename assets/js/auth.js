/**
 * Authentication Module - INTEX Moldova
 * Handles user registration, login, and session management
 */

class AuthManager {
    constructor() {
        this.usersKey = 'intex_users';
        this.currentUserKey = 'intex_current_user';
        this.initializeUsers();
        console.log('[AUTH] AuthManager initialized');
    }

    /**
     * Initialize users storage if it doesn't exist
     */
    initializeUsers() {
        if (!localStorage.getItem(this.usersKey)) {
            localStorage.setItem(this.usersKey, JSON.stringify([]));
            console.log('[AUTH] Initialized empty users storage');
        } else {
            const users = this.getAllUsers();
            console.log('[AUTH] Found', users.length, 'users in storage');
        }
    }

    /**
     * Get all registered users
     */
    getAllUsers() {
        try {
            return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
        } catch (e) {
            console.error('[AUTH] Error retrieving users:', e);
            return [];
        }
    }

    /**
     * Get current logged-in user
     */
    getCurrentUser() {
        try {
            const user = localStorage.getItem(this.currentUserKey);
            return user ? JSON.parse(user) : null;
        } catch (e) {
            console.error('[AUTH] Error retrieving current user:', e);
            return null;
        }
    }

    /**
     * Check if user is logged in
     */
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    /**
     * Validate email format
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validate password strength
     */
    isValidPassword(password) {
        return password && password.length >= 6;
    }

    /**
     * Check if email already exists
     */
    emailExists(email) {
        const users = this.getAllUsers();
        return users.some(user => user.email.toLowerCase() === email.toLowerCase());
    }

    /**
     * Simple hash password (client-side for demo)
     */
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'hash_' + Math.abs(hash).toString(16);
    }

    /**
     * MD5 hash for Gravatar
     */
    md5(str) {
        function rotateLeft(x, n) {
            return ((x << n) | (x >>> (32 - n)));
        }
        
        function addUnsigned(x, y) {
            const x8 = (x & 0x80000000);
            const y8 = (y & 0x80000000);
            const x4 = (x & 0x40000000);
            const y4 = (y & 0x40000000);
            const result = (x & 0x3FFFFFFF) + (y & 0x3FFFFFFF);
            if (x4 & y4) {
                return (result ^ 0x80000000 ^ x8 ^ y8);
            }
            if (x4 | y4) {
                if (result & 0x40000000) {
                    return (result ^ 0xC0000000 ^ x8 ^ y8);
                } else {
                    return (result ^ 0x40000000 ^ x8 ^ y8);
                }
            } else {
                return (result ^ x8 ^ y8);
            }
        }

        function F(x, y, z) { return (x & y) | ((~x) & z); }
        function G(x, y, z) { return (x & z) | (y & (~z)); }
        function H(x, y, z) { return (x ^ y ^ z); }
        function I(x, y, z) { return (y ^ (x | (~z))); }

        function FF(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }
        function GG(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }
        function HH(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }
        function II(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function convertToWordArray(string) {
            let lMessageLength = string.length;
            let lNumberOfWords_temp1 = lMessageLength + 8;
            let lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            let lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            let lWordArray = Array(lNumberOfWords - 1);
            let lBytePosition = 0;
            let lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function wordToHex(lValue) {
            let WordToHexValue = "";
            for (let lCount = 0; lCount <= 3; lCount++) {
                let lByte = (lValue >>> (lCount * 8)) & 255;
                if (lByte < 0)
                    lByte = 0x100 + lByte;
                if (lByte < 16)
                    WordToHexValue += "0";
                WordToHexValue += lByte.toString(16);
            }
            return WordToHexValue;
        }

        let x = Array();
        let k, AA, BB, CC, DD, a, b, c, d;
        let S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        let S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        let S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        let S41 = 6, S42 = 10, S43 = 15, S44 = 21;

        x = convertToWordArray(str);
        a = 0x67452301; b = 0xefcdab89; c = 0x98badcfe; d = 0x10325476;

        for (k = 0; k < x.length; k += 16) {
            AA = a; BB = b; CC = c; DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
            b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
            a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
            c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
            c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
            a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
            a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
            a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
            a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
            c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
            c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
            b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
            c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
            d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
            c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
            a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
            d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
            b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
        }

        let temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        return temp.toLowerCase();
    }

    /**
     * Get Gravatar URL from email
     */
    getGravatarUrl(email) {
        const hash = this.md5(email.toLowerCase().trim());
        return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=32`;
    }

    /**
     * Register a new user
     */
    register(userData) {
        console.log('[AUTH.register] Starting registration with email:', userData.email);
        const { name, email, phone, password, confirmPassword } = userData;

        if (!name || name.trim().length < 2) {
            console.warn('[AUTH.register] Invalid name:', name);
            return { success: false, message: 'Vă rugăm să introduceti un nume valid (minim 2 caractere)' };
        }

        if (!this.isValidEmail(email)) {
            console.warn('[AUTH.register] Invalid email format:', email);
            return { success: false, message: 'Vă rugăm să introduceti un email valid' };
        }

        if (this.emailExists(email)) {
            console.warn('[AUTH.register] Email already exists:', email);
            return { success: false, message: 'Acest email este deja înregistrat' };
        }

        if (!this.isValidPassword(password)) {
            console.warn('[AUTH.register] Invalid password length');
            return { success: false, message: 'Parola trebuie să aibă cel puțin 6 caractere' };
        }

        if (password !== confirmPassword) {
            console.warn('[AUTH.register] Passwords do not match');
            return { success: false, message: 'Parolele nu se potrivesc' };
        }

        const newUser = {
            id: Date.now(),
            name: name.trim(),
            email: email.toLowerCase(),
            phone: phone || '',
            password: this.hashPassword(password),
            avatar: this.getGravatarUrl(email),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const users = this.getAllUsers();
        users.push(newUser);
        localStorage.setItem(this.usersKey, JSON.stringify(users));

        console.log('[AUTH] ✓ User registered:', newUser.email);

        return {
            success: true,
            message: 'Înregistrare reușită! Acum vă puteți autentifica.'
        };
    }

    /**
     * Login user
     */
    login(email, password) {
        console.log('[AUTH.login] Attempting login with email:', email);
        
        if (!this.isValidEmail(email)) {
            console.warn('[AUTH.login] Invalid email format:', email);
            return { success: false, message: 'Vă rugăm să introduceti un email valid' };
        }

        const users = this.getAllUsers();
        console.log('[AUTH.login] Total users in database:', users.length);
        
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user) {
            console.warn('[AUTH.login] User not found:', email);
            return { success: false, message: 'Email sau parolă incorectă' };
        }

        console.log('[AUTH.login] User found:', user.email);
        console.log('[AUTH.login] Checking if hashPassword method exists:', typeof this.hashPassword);
        
        const passwordHash = this.hashPassword(password);
        console.log('[AUTH.login] Password hash:', passwordHash.substring(0, 10) + '...');
        console.log('[AUTH.login] Stored hash:', user.password.substring(0, 10) + '...');
        console.log('[AUTH.login] Password match:', user.password === passwordHash);
        
        if (user.password !== passwordHash) {
            console.warn('[AUTH.login] Password mismatch for user:', email);
            return { success: false, message: 'Email sau parolă incorectă' };
        }

        console.log('[AUTH.login] Password verified, creating session');
        
        const sessionUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            avatar: user.avatar || this.getGravatarUrl(user.email),
            loginTime: new Date().toISOString()
        };

        localStorage.setItem(this.currentUserKey, JSON.stringify(sessionUser));

        console.log('[AUTH] ✓ User logged in:', email);

        return {
            success: true,
            message: 'Autentificare reușită!',
            user: sessionUser
        };
    }

    /**
     * Logout user
     */
    logout() {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
            console.log('[AUTH] ✓ User logged out:', currentUser.email);
        }
        localStorage.removeItem(this.currentUserKey);
        return { success: true, message: 'Deconectare reușită' };
    }

    /**
     * Update user profile
     */
    updateProfile(userId, updateData) {
        const users = this.getAllUsers();
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            return { success: false, message: 'Utilizator nu găsit' };
        }

        const user = users[userIndex];
        if (updateData.name) user.name = updateData.name.trim();
        if (updateData.phone) user.phone = updateData.phone;

        if (updateData.email && updateData.email !== user.email) {
            if (!this.isValidEmail(updateData.email)) {
                return { success: false, message: 'Email invalid' };
            }
            if (this.emailExists(updateData.email)) {
                return { success: false, message: 'Acest email este deja în folosință' };
            }
            user.email = updateData.email.toLowerCase();
        }

        user.updatedAt = new Date().toISOString();
        users[userIndex] = user;
        localStorage.setItem(this.usersKey, JSON.stringify(users));

        const currentUser = this.getCurrentUser();
        if (currentUser && currentUser.id === userId) {
            const sessionUser = {
                ...currentUser,
                name: user.name,
                email: user.email,
                phone: user.phone
            };
            localStorage.setItem(this.currentUserKey, JSON.stringify(sessionUser));
        }

        console.log('[AUTH] ✓ User profile updated:', user.email);
        return { success: true, message: 'Profil actualizat cu succes', user };
    }

    /**
     * Change password
     */
    changePassword(userId, oldPassword, newPassword, confirmNewPassword) {
        if (!this.isValidPassword(newPassword)) {
            return { success: false, message: 'Parola nouă trebuie să aibă cel puțin 6 caractere' };
        }

        if (newPassword !== confirmNewPassword) {
            return { success: false, message: 'Parolele noi nu se potrivesc' };
        }

        const users = this.getAllUsers();
        const user = users.find(u => u.id === userId);

        if (!user) {
            return { success: false, message: 'Utilizator nu găsit' };
        }

        const oldPasswordHash = this.hashPassword(oldPassword);
        if (user.password !== oldPasswordHash) {
            return { success: false, message: 'Parola curentă este incorectă' };
        }

        const userIndex = users.findIndex(u => u.id === userId);
        users[userIndex].password = this.hashPassword(newPassword);
        users[userIndex].updatedAt = new Date().toISOString();
        localStorage.setItem(this.usersKey, JSON.stringify(users));

        console.log('[AUTH] ✓ Password changed for:', user.email);
        return { success: true, message: 'Parolă schimbată cu succes' };
    }

    /**
     * Delete user account
     */
    deleteAccount(userId, password) {
        const users = this.getAllUsers();
        const user = users.find(u => u.id === userId);

        if (!user) {
            return { success: false, message: 'Utilizator nu găsit' };
        }

        const passwordHash = this.hashPassword(password);
        if (user.password !== passwordHash) {
            return { success: false, message: 'Parolă incorectă' };
        }

        const updatedUsers = users.filter(u => u.id !== userId);
        localStorage.setItem(this.usersKey, JSON.stringify(updatedUsers));

        const currentUser = this.getCurrentUser();
        if (currentUser && currentUser.id === userId) {
            localStorage.removeItem(this.currentUserKey);
        }

        console.log('[AUTH] ✓ Account deleted:', user.email);
        return { success: true, message: 'Cont șters cu succes' };
    }

    /**
     * Get user by ID
     */
    getUserById(userId) {
        const users = this.getAllUsers();
        return users.find(u => u.id === userId) || null;
    }

    /**
     * Get user by email
     */
    getUserByEmail(email) {
        const users = this.getAllUsers();
        return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
    }
}

// Create global auth manager instance
window.authManager = new AuthManager();

// Expose auth functions globally
window.authRegister = (userData) => window.authManager.register(userData);
window.authLogin = (email, password) => window.authManager.login(email, password);
window.authLogout = () => window.authManager.logout();
window.authGetCurrentUser = () => window.authManager.getCurrentUser();
window.authIsLoggedIn = () => window.authManager.isLoggedIn();
