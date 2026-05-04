# Firebase setup

1. Crie um projeto no Firebase.
2. Ative Firestore Database em modo production.
3. Em Project settings > Service accounts, gere uma nova private key.
4. Configure estas variaveis no Vercel:

```env
FIREBASE_PROJECT_ID=seu-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@seu-project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
ADMIN_PASSWORD=uma_senha_forte
SITE_ID=automotive
```

O documento usado sera `site_settings/automotive`.
