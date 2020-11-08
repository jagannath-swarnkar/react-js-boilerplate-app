scp -o StrictHostKeyChecking=no -r build/* ${user}@${ip}:${path} << EOF
EOF

# with ssh password
# sshpass password scp -o StrictHostKeyChecking=no -r build/* ${user}@${ip}:${path} << EOF
