-- 管理者IDシーケンス
create sequence seq_manager_id
as integer
increment by 1
minvalue 1
no maxvalue
start with 1
cache 1
cycle
owned by m_managers.manager_id;

-- 契約番号シーケンス
create sequence seq_contract_id
as integer
increment by 1
minvalue 1
no maxvalue
start with 1
cache 1
cycle
owned by m_contracts.contract_id;

-- 利用者IDシーケンス
create sequence seq_user_id
as integer
increment by 1
minvalue 1
no maxvalue
start with 1
cache 1
cycle
owned by m_users.user_id;

-- 契約責任者IDシーケンス
create sequence seq_contract_manager_id
as integer
increment by 1
minvalue 1
no maxvalue
start with 1
cache 1
cycle
owned by m_contract_managers.contract_manager_id;
