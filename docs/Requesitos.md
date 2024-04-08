
**Requisitos funcionais** 
- Criar e gerir calendário letivo
- O utilizador deve ser recompensado por ser produtivo:
	- Receber experiência ao concluir uma tarefa 
	- Manter uma “streak” de atividade ao completar a tarefa diária 
	- Receber “gemas” como recompensa semanal 
	- Receber troféus por lifetime achievements 
- Agendar e receber alertas sobre exames e projetos 
- Criar projetos com subtarefas e gerir o seu progresso 
- -Poder definir metas e ver estatísticas 
- O utilizador deve poder definir tarefas e marcá-las como concluídas 


## Entidades

- **Utilizador**
	- ID - pk
	- Nome
	- Email
	- Senha
	- Nível de experiência
	- Streak de atividade
	- Gemas
	- rank
	- cosmeticos (entidade) - fk
	- leaderboard - fk
- **Tarefa**
	- ID - pk
	- Descrição
	- Data
	- duração
	- Prioridade
	- dificuldade
	- categoria
	- repetivel
	- Projeto - fk
	- utilizador - fk
- **Projeto**
	- ID - pk
	- Nome
	- Descrição
	- Data de início (evento) -  
	- Data de término (evento) - 
	- Evento - fk 
	- utilizador - fk
- **Eventos**
	- ID - pk
	- Nome
	- Data - pk ID - pk
	- Hora - pk
	- Descrição
	- repetivel
- **Notificação**
	- Tipo (exame, projeto, tarefa) - pk
	- Data - pk
	- Hora - pk
	- Mensagem
	- eventos - fk
	- projeto - fk 
	- tarefa - fk 
- **Cosmetico**
	- nome - pk
	- tipo
	- custo
- **Leaderboard**
	- rank - pk
	- posição
	- xp season
	- utilizador - fk

## Entidades-Relação

**cosmeticos**