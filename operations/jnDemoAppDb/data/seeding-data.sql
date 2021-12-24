-- 管理者
INSERT INTO m_managers
VALUES
(1,'管理者1','password',NOW(),NOW());

SELECT setval('seq_manager_id',(SELECT max(manager_id) FROM m_managers));

-- 契約先
INSERT INTO m_contracts
VALUES
(1,'契約先1',1,1,1,'営業担当者1',NOW(),NOW(),NOW(),false,NOW(),NOW());

SELECT setval('seq_contract_id',(SELECT max(contract_id) FROM m_contracts));

-- 利用者
INSERT INTO m_users
VALUES
(1,'利用者1','example.com',NOW(),NOW());

SELECT setval('seq_user_id',(SELECT max(user_id) FROM m_users));

--契約責任者
INSERT INTO m_contract_managers
VALUES
(1,'契約責任者1','example.com',NOW(),NOW());

SELECT setval('seq_contract_manager_id',(SELECT max(contract_manager_id) FROM m_contract_managers));
