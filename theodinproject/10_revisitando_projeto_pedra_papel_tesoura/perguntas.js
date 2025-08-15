/* 1- O que são branches no Git?
Um branch é um ponteiro para uma linha de desenvolvimento (uma sequência de commits). Pense no main como o tronco da árvore e cada branch como um galho onde você pode trabalhar isoladamente — mudanças num branch não alteram os outros até você decidir mesclar (merge) elas. */


/* 2-  Como criar um novo branch?

Cria e já troca para ele numa tacada só:

git checkout -b nome-do-branch
# ou (com Git mais novo)
git switch -c nome-do-branch


Para enviar o branch ao remoto (GitHub) e “ligar” o upstream:

git push -u origin nome-do-branch */


/* 3- Como mesclar (merge) um branch de volta para o main?

Fluxo típico:

# 1) vá para o main
git checkout main
# ou: git switch main

# 2) atualize o main remoto
git pull origin main

# 3) faça o merge do seu feature branch
git merge nome-do-branch

# 4) publique o main atualizado
git push origin main


Se ocorrerem merge conflicts, o Git vai avisar os arquivos conflitantes — abra, resolva os conflitos, git add nos arquivos resolvidos e finalize com git commit.

Depois de mesclar você pode apagar o branch:

git branch -d nome-do-branch          # apaga localmente (se já foi mesclado)
git push origin --delete nome-do-branch  # apaga no remoto */


/* 4- Um caso de uso para branches

Desenvolver uma nova funcionalidade (feature branch).
Crie feature/login, trabalhe lá sem mexer no main. Se algo quebrar, o main continua estável. Quando a feature estiver pronta, faz-se o merge — ideal também para abrir pull requests e revisão de código.

Checklist rápido (copiar/colar)
# criar branch e ir pra ele
git checkout -b minha-feature

# trabalhar, commitar
git add .
git commit -m "Implementa X"

# enviar ao remoto (primeiro push)
git push -u origin minha-feature

# quando pronto -> voltar ao main e mesclar
git checkout main
git pull origin main
git merge minha-feature
git push origin main

# limpar
git branch -d minha-feature
git push origin --delete minha-feature

*/