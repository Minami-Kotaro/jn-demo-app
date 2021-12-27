-- Project Name : jnDemoApp
-- Date/Time    : 2021/12/24 11:14:42
-- Author       : 52021
-- RDBMS Type   : PostgreSQL
-- Application  : A5:SQL Mk-2

/*
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
*/

-- 利用者
--* RestoreFromTempTable
create table m_users (
  user_id integer not null
  , user_name varchar(24) not null
  , user_mail_address varchar(256) not null
  , create_date timestamp not null
  , update_date timestamp not null
  , constraint m_users_PKC primary key (user_id)
) ;

-- 契約責任者
--* RestoreFromTempTable
create table m_contract_managers (
  contract_manager_id integer not null
  , contract_manager_name varchar(24) not null
  , contract_manager_mail_address varchar(256) not null
  , create_date timestamp not null
  , update_date timestamp not null
  , constraint m_contract_managers_PKC primary key (contract_manager_id)
) ;

-- 契約先
--* RestoreFromTempTable
create table m_contracts (
  contract_id integer not null
  , contractor_name varchar(24)
  , contract_manager_id integer not null
  , user_id integer not null
  , renewal_count integer not null
  , sales_staff_name varchar(24) not null
  , contract_date timestamp not null
  , valid_start_date timestamp not null
  , valid_end_date timestamp not null
  , is_deleted boolean not null
  , create_date timestamp not null
  , update_date timestamp not null
  , constraint m_contracts_PKC primary key (contract_id)
) ;

-- 管理者
--* RestoreFromTempTable
create table m_managers (
  manager_id integer not null
  , manager_name varchar(24) not null
  , manager_mail_address varchar(256) not null
  , password varchar(60) not null
  , create_date timestamp not null
  , update_date timestamp not null
  , constraint m_managers_PKC primary key (manager_id)
) ;

alter table m_managers add constraint m_managers_IX1
  unique (manager_mail_address) ;

comment on table m_users is '利用者';
comment on column m_users.user_id is '利用者ID';
comment on column m_users.user_name is '利用者名';
comment on column m_users.user_mail_address is '利用者メールアドレス';
comment on column m_users.create_date is '作成日時';
comment on column m_users.update_date is '更新日時';

comment on table m_contract_managers is '契約責任者';
comment on column m_contract_managers.contract_manager_id is '契約責任者ID';
comment on column m_contract_managers.contract_manager_name is '契約責任者名';
comment on column m_contract_managers.contract_manager_mail_address is '契約責任者メールアドレス';
comment on column m_contract_managers.create_date is '作成日時';
comment on column m_contract_managers.update_date is '更新日時';

comment on table m_contracts is '契約先';
comment on column m_contracts.contract_id is '契約番号';
comment on column m_contracts.contractor_name is '契約先名';
comment on column m_contracts.contract_manager_id is '契約責任者ID';
comment on column m_contracts.user_id is '利用者ID';
comment on column m_contracts.renewal_count is '更新回数';
comment on column m_contracts.sales_staff_name is '営業担当';
comment on column m_contracts.contract_date is '契約日';
comment on column m_contracts.valid_start_date is '有効期限開始日';
comment on column m_contracts.valid_end_date is '有効期限終了日';
comment on column m_contracts.is_deleted is '削除フラグ';
comment on column m_contracts.create_date is '作成日時';
comment on column m_contracts.update_date is '更新日時';

comment on table m_managers is '管理者';
comment on column m_managers.manager_id is '管理者ID';
comment on column m_managers.manager_name is '管理者名';
comment on column m_managers.manager_mail_address is '管理者メールアドレス';
comment on column m_managers.password is 'パスワード';
comment on column m_managers.create_date is '作成日時';
comment on column m_managers.update_date is '更新日時';
