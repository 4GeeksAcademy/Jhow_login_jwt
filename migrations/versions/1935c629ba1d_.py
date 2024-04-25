"""empty message

Revision ID: 1935c629ba1d
Revises: b9cdc4f7ce6e
Create Date: 2024-04-21 15:53:05.848793

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1935c629ba1d'
down_revision = 'b9cdc4f7ce6e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('questions', schema=None) as batch_op:
        batch_op.alter_column('information',
               existing_type=sa.VARCHAR(length=250),
               type_=sa.String(length=450),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('questions', schema=None) as batch_op:
        batch_op.alter_column('information',
               existing_type=sa.String(length=450),
               type_=sa.VARCHAR(length=250),
               existing_nullable=False)

    # ### end Alembic commands ###